import Link from "next/link";
import Image from "next/image";

type PortfolioItem = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
};

const PORTFOLIO: PortfolioItem[] = [
  {
    href: "https://www.mugglepay.com",
    imgSrc: "/images/logos/mugglepay.png",
    imgAlt: "MugglePay Logo",
    title: "MugglePay",
    desc:
      "MugglePay is a payment gateway that enables businesses to accept cryptocurrency payments.",
  },
  {
    href: "https://partnerr.org",
    imgSrc: "/images/logos/partnerr.png",
    imgAlt: "PartnerR Logo",
    title: "PartnerR",
    desc:
      "PartnerR is an agency that offers PR services at extremely competitive rates, but they are more than just a PR agency.",
  },
  {
    href: "https://www.deeplink.cloud",
    imgSrc: "/images/logos/deeplink.png",
    imgAlt: "DeepLink Logo",
    title: "DeepLink",
    desc:
      "DeepLink protocol is the decentralized AI cloud gaming protocol, it makes cloud game development easier than ever.",
  },
  {
    href: "https://www.seraph.game",
    imgSrc: "/images/logos/seraph.png",
    imgAlt: "Seraph Logo",
    title: "Seraph",
    desc:
      "Seraph is the world's first high-quality web3 dark ARPG loot game.",
  },
  {
    href: "https://www.deepbrainchain.org",
    imgSrc: "/images/logos/deepbrainchain.png",
    imgAlt: "DeepBrain Chain Logo",
    title: "DeepBrain Chain",
    desc:
      "DeepBrain Chain is a decentralized AI computing platform that enables secure and efficient AI model training.",
  },
  {
    href: "https://balance.fun",
    imgSrc: "/images/logos/balance.png",
    imgAlt: "Balance Logo",
    title: "Balance",
    desc:
      "Balance is a next-gen AI+Web3 protocol and framework for social and gaming, seamlessly integrating AI Agents, blockchain technology, and decentralized applications.",
  },
  {
    href: "http://boomai.io",
    imgSrc: "/images/logos/boom.png",
    imgAlt: "Boom Logo",
    title: "Boom",
    desc:
      "Boom is the pioneer AI-powered data incentive layer designed to bridge the gap between off-chain activity and on-chain economies.",
  },
  {
    href: "https://zerobase.pro",
    imgSrc: "/images/logos/zerobase.png",
    imgAlt: "ZEROBASE Logo",
    title: "ZEROBASE",
    desc:
      "ZEROBASE is the most competitive ZK prover network across speed, cost, and security, and the only one that protects your privacy.",
  },
  {
    href: "https://learn.dehouse.ai",
    imgSrc: "/images/logos/dehouse.png",
    imgAlt: "DeHouse Logo",
    title: "DeHouse",
    desc:
      "DeHouse is a movement to build the future of the creator economy on the foundation of true digital ownership.",
  },
  {
    href: "https://www.superp.xyz",
    imgSrc: "/images/logos/superp.png",
    imgAlt: "Superp Logo",
    title: "Superp",
    desc:
      "Superp is the Perp DEX for any coins, up to 10,000x Leverage.",
  },
  {
    href: "https://audition.fi",
    imgSrc: "/images/logos/audition.png",
    imgAlt: "Audition+ Logo",
    title: "Audition",
    desc:
      "Audition+ redefines the legendary dance game for Web3, blending virtual and physical play with the Smart Fit Mat and multi-platform access.",
  },
  {
    href: "https://www.decentralgpt.org",
    imgSrc: "/images/logos/decentralgpt.png",
    imgAlt: "DecentralGPT Logo",
    title: "DecentralGPT",
    desc:
      "DecentralGPT is a decentalized and distributed AI inference computing network for AGI generation.",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32" id="portfolio">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <div>
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Portfolio
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Investments
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {PORTFOLIO.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg bg-muted p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 mx-auto flex h-16 items-center justify-center">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={128}
                    height={64}
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
