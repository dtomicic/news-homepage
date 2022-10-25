import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import webMobile from '../public/images/image-web-3-mobile.jpg';
import webDesktop from '../public/images/image-web-3-desktop.jpg';
import gaming from '../public/images/image-gaming-growth.jpg';
import retro from '../public/images/image-retro-pcs.jpg';
import top from '../public/images/image-top-laptops.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>W News</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className={homeStyles.main}>
        <div className={homeStyles.firstSection}>
          <div className={homeStyles.firstSectionTop}>
            <div className={homeStyles.firstSectionTopImageMobile}>
              <Image src={webMobile} />
            </div>
            <div className={homeStyles.firstSectionTopImageDesktop}>
              <Image src={webDesktop} />
            </div>
            <div className={homeStyles.firstSectionTopText}>
              <h3 className={homeStyles.firstSectionTopTextHeader}>The Bright Future of Web 3.0?</h3>
              <div className={homeStyles.firstSectionTopTextContent}>
                <p className={homeStyles.firstSectionTopTextContentParagraph}>
                  We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <div className={homeStyles.firstSectionTopTextContentBtn}>READ MORE</div>
              </div>
            </div>
          </div>
          <div className={homeStyles.firstSectionBottom}>
            <h3 className={homeStyles.firstSectionBottomHeader}>New</h3>
            <div className={homeStyles.firstSectionBottomItem}>
              <h3 className={homeStyles.firstSectionBottomItemHeader}>Hydrogen VS Electric Cars</h3>
              <p className={homeStyles.firstSectionBottomItemExcerpt}>Will hydrogen-fueled cars ever catch up to EVs?</p>
              <hr></hr>
            </div>
            <div className={homeStyles.firstSectionBottomItem}>
              <h3 className={homeStyles.firstSectionBottomItemHeader}>The Downsides of AI Artistry</h3>
              <p className={homeStyles.firstSectionBottomItemExcerpt}>What are the possible adverse effects of on-demand AI image generation?</p>
              <hr></hr>
            </div>
            <div className={homeStyles.firstSectionBottomItem}>
              <h3 className={homeStyles.firstSectionBottomItemHeader}>Is VC Funding Drying up?</h3>
              <p className={homeStyles.firstSectionBottomItemExcerpt}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
        <div className={homeStyles.secondSection}>
          <div className={homeStyles.secondSectionNewsItem}>
            <div className={homeStyles.secondSectionNewsItemPicture}>
              <Image src={retro} />
            </div>
            <div className={homeStyles.secondSectionNewsItemText}>
              <h3 className={homeStyles.secondSectionNewsItemTextNumber}>01</h3>
              <h3 className={homeStyles.secondSectionNewsItemTextHeader}>Reviving Retro PCs</h3>
              <p className={homeStyles.secondSectionNewsItemTextExcerpt}>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className={homeStyles.secondSectionNewsItem}>
            <div className={homeStyles.secondSectionNewsItemPicture}>
              <Image src={top} />
            </div>
            <div className={homeStyles.secondSectionNewsItemText}>
              <h3 className={homeStyles.secondSectionNewsItemTextNumber}>02</h3>
              <h3 className={homeStyles.secondSectionNewsItemTextHeader}>Top 10 Laptops of 2022</h3>
              <p className={homeStyles.secondSectionNewsItemTextExcerpt}>Our best picks for various needs and budgets</p>
            </div>
          </div>
          <div className={homeStyles.secondSectionNewsItem}>
            <div className={homeStyles.secondSectionNewsItemPicture}>
              <Image src={gaming} />
            </div>
            <div className={homeStyles.secondSectionNewsItemText}>
              <h3 className={homeStyles.secondSectionNewsItemTextNumber}>03</h3>
              <h3 className={homeStyles.secondSectionNewsItemTextHeader}>The Growth of Gaming</h3>
              <p className={homeStyles.secondSectionNewsItemTextExcerpt}>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
