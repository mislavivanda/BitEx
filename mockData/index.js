import ArticlePicture from "../assets/mock_article.png";
import BitcoinLogo from "../assets/BTC_logo.png";
import ETHLogo from "../assets/ETH_logo.png";

const mockArticles = [
  {
    picture: ArticlePicture,
    title: "Bitcoin price reaches minimum value since 2016 downfall",
    date: "15 Nov 2021",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit Id bibendum vitae tellus dui elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit...",
  },
  {
    picture: ArticlePicture,
    title: "Bitcoin price reaches minimum value since 2016 downfall",
    date: "15 Nov 2021",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit Id bibendum vitae tellus dui elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit...",
  },
  {
    picture: ArticlePicture,
    title: "Bitcoin price reaches minimum value since 2016 downfall",
    date: "15 Nov 2021",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit Id bibendum vitae tellus dui elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit...",
  },
  {
    picture: ArticlePicture,
    title: "Bitcoin price reaches minimum value since 2016 downfall",
    date: "15 Nov 2021",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit Id bibendum vitae tellus dui elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit...",
  },
  {
    picture: ArticlePicture,
    title: "Bitcoin price reaches minimum value since 2016 downfall",
    date: "15 Nov 2021",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit Id bibendum vitae tellus dui elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum vitae tellus dui elit...",
  },
];

const mockDashboardData = [
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
  {
    assetIcon: BitcoinLogo,
    asset: "Bitcoin(BTC)",
    amount: 45.6,
    price: 30,
    holding: 146000,
  },
];

const mockTradesData = [
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
  {
    asset1Icon: BitcoinLogo,
    asset1: "Bitcoin(BTC)",
    amount1: 45.6,
    asset2Icon: ETHLogo,
    asset2: "Ethereum(ETH)",
    amount2: 34673,
  },
];

const mockAnalyticsData = {
  today: {
    deposit: 564,
    profit: 54,
    feesAcrrued: 20,
  },
  lastWeek: {
    deposit: 2471,
    profit: 194,
    feesAcrrued: 97,
  },
  lastMonth: {
    deposit: 7642,
    profit: 367,
    feesAcrrued: 261,
  },
};

export { mockArticles, mockDashboardData, mockTradesData, mockAnalyticsData };
