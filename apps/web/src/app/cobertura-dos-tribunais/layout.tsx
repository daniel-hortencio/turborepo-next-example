import { CourtCoverageHeader } from 'pages/CourtCoverage/Header'
import { Suspense } from 'react'
import { Skeleton, Wrapper } from 'ui'

export default function CourtsCoverageLayout({ children }) {
  return (
    <div>
      <CourtCoverageHeader />

      <Suspense
        fallback={
          <>
            <Skeleton className="h-[88px] w-full" />
            <Wrapper className="pt-16">
              <Skeleton className="mx-auto mb-11 h-7 w-72" rounded="lg" />
              <Skeleton className="mb-4 h-4 w-full" rounded="lg" />

              {[1, 2, 3, 4, 5, 6].map(item => (
                <Skeleton
                  key={item}
                  className="mb-5 h-40 w-full"
                  rounded="lg"
                />
              ))}
            </Wrapper>
          </>
        }
      >
        {children}
      </Suspense>
    </div>
  )
}
