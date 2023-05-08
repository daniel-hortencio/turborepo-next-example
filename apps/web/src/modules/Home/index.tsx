"use client";

import { Box } from "shared/components/elements";
import { WebsiteHomeBanner } from "./Banner";
import { WebsiteHowWorks } from "./HowWorks";
import { WebsiteApi } from "./Api";
import { WebsiteBenefits } from "./Benefits";

export const WebsiteHomePage = () => {
  return (
    <Box>
      <WebsiteHomeBanner />
      <WebsiteHowWorks />

      <WebsiteApi />
      <WebsiteBenefits />
    </Box>
  );
};
