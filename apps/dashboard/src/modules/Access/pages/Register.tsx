'use client'

import Link from 'next/link'
import {
  Box,
  Button,
  InputGroup,
  InputPassword,
  InputText,
  Text,
  SelectCountryDDI
} from '../../../shared/components/elements'
import { PublicLayoutHeader } from '../../../shared/components/layouts/PublicLayout/Header'
import { FormEvent, useState } from 'react'
import { accessServices } from '../services'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { authenticateUser } from 'shared/store'
import { useToast } from 'shared/contexts/Toast'

export default function PageRegister() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [phone, setPhone] = useState('')

  const [name_error, setNameError] = useState('')
  const [email_error, setEmailError] = useState('')
  const [password_error, setPasswordError] = useState('')
  const [password_confirmation_error, setPasswordConfirmationError] =
    useState('')
  const [phone_error, setPhoneError] = useState('')

  const [ddi, setDDI] = useState({ name: 'Brasil', code: 'BR', ddi: '55' })

  const dispatch = useDispatch()
  const { createToast } = useToast()

  // const dispatch = useDispatch()

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()

    setLoading(true)

    const validationSchema = yup.object().shape({
      name: yup.string().required('Nome obrigatório'),
      email: yup
        .string()
        .required('Email obrigatório')
        .email('Insira um e-mail com formato válido'),
      password: yup
        .string()
        .required('Senha obrigatória')
        .min(8, 'Senha deve conter pelo menos 8 dígitos'),
      password_confirmation: yup
        .string()
        .required('Confirmação de senha obrigatória')
        .oneOf([yup.ref('password'), null], 'Senhas não coincidem'),
      phone: yup
        .string()
        .required('Telefone obrigatório')
        .min(9, 'Deve conter pelo menos 9 dígitos')
    })

    validationSchema
      .validate(
        {
          name,
          email,
          password,
          password_confirmation,
          phone
        },
        { abortEarly: false }
      )
      .then(() => {
        const dto = {
          name,
          email,
          password,
          phone: `${ddi.ddi}${phone}`
        }

        accessServices
          .register(dto)
          .then(({ data }) => {
            dispatch(authenticateUser(data))
          })
          .catch(err => {
            setLoading(false)
            createToast({
              message: err.message.detail,
              status: 'danger'
            })
          })
      })
      .catch(validationErrors => {
        setLoading(false)

        validationErrors.inner.forEach(
          ({ message, path }: yup.ValidationError) => {
            const handle_errors = {
              name: () => setNameError(message),
              email: () => setEmailError(message),
              password: () => setPasswordError(message),
              password_confirmation: () =>
                setPasswordConfirmationError(message),
              phone: () => setPhoneError(message)
            }

            handle_errors[path]()
          }
        )
      })
  }

  const handleChange = (value: any, field: string) => {
    const handle_fields = {
      name: () => {
        setName(value)
        setNameError('')
      },
      email: () => {
        setEmail(value)
        setEmailError('')
      },
      password: () => {
        setPassword(value)
        setPasswordError('')
      },
      password_confirmation: () => {
        setPasswordConfirmation(value)
        setPasswordConfirmationError('')
      },
      phone: () => {
        setPhone(value)
        setPhoneError('')
      }
    }

    handle_fields[field]()
  }

  return (
    <>
      <PublicLayoutHeader
        linkTo="/"
        desktopText="Já tem conta?"
        desktopLinkText="Acessar agora"
        mobileLinkText="Entrar"
      />

      <Text className="text-white font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8">
        Crie a sua conta e ganhe 5 consultas grátis
      </Text>
      <form onSubmit={handleRegister}>
        <Box className="mb-3">
          <InputGroup label="Nome" error={name_error}>
            <InputText
              name={name}
              placeholder="Insira seu nome"
              onChange={e => handleChange(e, 'name')}
            />
          </InputGroup>
        </Box>
        <Box className="mb-3">
          <InputGroup label="E-mail" error={email_error}>
            <InputText
              value={email}
              placeholder="Insira seu e-mail"
              onChange={e => handleChange(e, 'email')}
            />
          </InputGroup>
        </Box>

        <Box className="flex mb-3">
          <Box className="w-28 md:w-36">
            <InputGroup label="País (DDI)">
              <SelectCountryDDI onSelect={setDDI} selected={ddi} />
            </InputGroup>
          </Box>
          <Box className="flex-auto pl-5">
            <InputGroup label="DDD + Celular" error={phone_error}>
              <InputText
                type="number"
                value={phone}
                placeholder="Insira seu nº de celular"
                onChange={e => handleChange(e, 'phone')}
              />
            </InputGroup>
          </Box>
        </Box>

        <Box className="mb-3">
          <InputGroup label="Senha (mín. 8 caracteres)" error={password_error}>
            <InputPassword
              value={password}
              onChange={e => handleChange(e, 'password')}
              placeholder="Defina sua senha de acesso"
            />
          </InputGroup>
        </Box>

        <Box className="mb-9">
          <InputGroup
            label="Confirme sua senha"
            error={password_confirmation_error}
          >
            <InputPassword
              value={password_confirmation}
              placeholder="Confirme sua senha"
              onChange={e => handleChange(e, 'password_confirmation')}
            />
          </InputGroup>
        </Box>

        <Box className="mt-1">
          <Button
            text="Criar minha conta"
            type="submit"
            color="primary"
            size="large"
            loading={loading}
          />
        </Box>

        <Box className="mt-6">
          <Text className="text-custom-gray-300 text-sm text-center">
            Ao se cadastrar, você concorda com os{' '}
            <Link href="/" className="underline">
              Termos
            </Link>{' '}
            e as{' '}
            <Link href="/" className="underline">
              Política de Privacidade
            </Link>
            .
          </Text>
        </Box>
      </form>
    </>
  )
}
