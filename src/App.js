import React from 'react';
import './App.css';
import GoogleMaps from "./components/GoogleMaps.jsx";
import logo from "./Assets/グループ 1825-logo.svg";
import bluePhone from "./Assets/電話のアイコン (2)-blue.svg";
import whitePhone from "./Assets/電話のアイコン (2)-white.svg";

function App() {
  const handleClick = () => {
    const nav = document.querySelector(".main-nav");
    const buttonToggle = document.querySelector(".toggle-button");
    const visible = nav.getAttribute("data-visible");
    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        buttonToggle.setAttribute("aria-expanded", true);
        
    } else {
        nav.setAttribute("data-visible", false);
        buttonToggle.setAttribute("aria-expanded", false);
    }
  }

  return (
    <div className="App">
      <header>
        <div className="logo-bar flex">
            <div>
                <img className="logo float-left" src={logo} alt="main logo" />
                <span className="font-dk-gray bold fs-400">課題株式会社</span>
            </div>
            <div className="flex">
                <div ><a href="tel:000000000">
                    <img className="blue-phone float-left" src={bluePhone} alt="blue phone" /></a>
                    <span className="hidden float-left">
                        <a className="decoration-none fs-650 font-blue bold" href="tel:000000000">
                            000-000-000
                        </a>
                    </span>
                </div>
                <button className="toggle-button toggle-close" onClick={handleClick} aria-expanded="false"></button>
                <div className="fs-100 bg-red font-white お問い合わせ hidden">お問い合わせ</div>
            </div>
        </div>
        <div>
            <nav>
                <ul className="main-nav list-style-none noto fs-200 spacing-1 bold" data-visible="false">
                    <li><a href="/">ホーム</a></li>
                    <li><a href="/">選ばれる理由</a></li>
                    <li><a href="/">サービス紹介</a></li>
                    <li><a href="/">わたしたちの歩み</a></li>
                    <li><a href="/">未来への取組み</a></li>
                    <li><a href="/">当社について</a></li>
                    <li><a href="/">採用情報</a></li>
                    <li><a href="/" className="nav-end">お知らせ</a></li>
                </ul>
            </nav>
        </div>
        <div className="banner-container">
            <div className="main-banner">
                <div>
                    <h1 className="banner-text roboto fs-800 italic font-white">ABOUT US</h1>
                    <h2 className="banner-text noto font-white fs-600">当社について</h2>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section className="container greetings-container">
            <div className="margin-1">
                <h1 className="font-blue roboto italic fs-700 text-align spacing-3 bold">GREETINGS</h1>
                <h2 className="font-blue noto fs-500 text-align spacing-3">代表挨拶</h2>
            </div>
            <div className="greetings-grid">
                <div className="greetings-image-container">
                    <div className="greetings-image"></div>
                </div>
                <div className="greetings-text noto fs-200 spacing-3 line-height">
                    <p >
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいりますテキストがはいります 
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいりますテキストがはいります
                        テキストがはいりますテキストがはいります
                    </p>
                    <p className="greetings-name text-right">代表取締役 <span className="fs-400">名前</span></p>
                </div>
            </div>
        </section>
        <div className="vision-image"></div> 
        <section className="container vision-container spacing-3">
            <div className="margin-1 text-align font-blue">
                <h1 className="roboto italic fs-700">VISION</h1>
                <h2 className="noto fs-500">ビジョン</h2>
            </div>
            <div className="vision-text">
                <p className="noto fs-200  line-height">
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいりますテキストがはいります
                    テキストがはいりますテキストがはいります
                </p>
            </div>
        </section>

        <section className="container spacing-3">
            <div className="margin-1">
                <h1 className="font-blue roboto italic fs-700 text-align ">COMPANY</h1>
                <h2 className="font-blue noto fs-500 text-align">会社概要</h2>
            </div>
            <div className="company-grid noto fs-200">
                <ul className="company-info1 bold list-style-none">
                    <li>会社概要</li>
                    <li>代表者</li>
                    <li>本社所在地</li>
                    <li>営業所</li>
                    <li>TEL</li>
                    <li>設立</li>
                    <li>資本金</li>
                </ul>
                <ul className="company-info2 list-style-none">
                    <li>課題株式会社</li>
                    <li>名前</li>
                    <li>住所がはいります</li>
                    <li>住所がはいります</li>
                    <li>000-000-000</li>
                    <li>昭和○○年〇月○○日</li>
                    <li>1,000万円</li>
                </ul>
            </div>
        </section>

        <section className="noto container text-align">
            <div className="margin-1">
                <h1 className="font-blue roboto italic fs-700 text-align spacing-3">ACCESS</h1>
                <h2 className="font-blue noto fs-500 text-align spacing-3">アクセス</h2>
            </div>
            <div className="map-box spacing-3">
                <div className="map-container">
                    <div>
                        <h3 className="font-blue map-location-1 fs-600">本社</h3>
                    </div>
                    <GoogleMaps />
                    <div className="gmap-text-container">
                        <p className="fs-200 text-right g-map-btn">
                            <a className=" font-blue" href="https://goo.gl/maps/asJJN73jPYBasnTv6">
                            グーグルマップで開く</a><i className="right-arrow"></i></p>
                        <div className="fs-200 text-left map-text ">
                            <p>
                            〒160-0022<br /> 東京都新宿区新宿1-8-1 大橋御苑駅ビル3階
                            </p>
                            <ul className=" list-style-square">
                                <li className="blue-bullet">アクセス情報が入ります</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="map-container ">
                    <div>
                        <div>
                            <h3 className="font-blue map-location-2 fs-600 noto">営業所</h3>
                        </div>
                            <GoogleMaps />
                        <div className="gmap-text-container">
                            <p className="fs-200 text-right g-map-btn">
                            <a className="font-blue" href="https://goo.gl/maps/asJJN73jPYBasnTv6">
                                グーグルマップで開く</a><i className="right-arrow"></i></p>
                            <div className="text-left map-text fs-200">
                                <p>
                                〒160-0022<br /> 東京都新宿区新宿1-8-1 大橋御苑駅ビル3階
                                </p>
                                <ul>
                                    <li className="blue-bullet">アクセス情報が入ります</li>
                                    <li className="indent line-height"> アクセス情報が入ります</li>   
                                    <li className="blue-bullet">アクセス情報が入ります</li>
                                    <li className="blue-bullet">アクセス情報が入ります</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div className="footer-banner spacing-1">
            <div className="footer-logo flex justify">
                <img className="logo float-left" src={logo} alt="logo" />
                <span className="font-white fs-200 noto display-block">課題株式会社</span>
            </div>
            <div className="flex justify noto">
                <div className="font-white fs-200">
                    <ul className="list-style-square footer-list">
                        <li><p>本社<br /> 住所が入ります住所が入ります住所が入ります</p></li>
                        <li><p>営業所<br /> 住所が入ります住所が入ります住所が入ります</p></li>
                    </ul>
                </div>
                <div className="grid grid-container">
                    <span className="fs-650 font-white flex">
                        <img className="white-phone" src={whitePhone} alt="white-phone" />
                        <a className="font-white decoration-none" href="tel:000000000">
                            000-000-000
                        </a>
                    </span>
                    <p className="bg-red font-white お問い合わせ お問い合わせ-footer fs-100">お問い合わせ</p>
                </div>
            </div>
        </div>
        <div>
            <nav>
                <ul className="spacing-1 footer-nav bg-dk-blue font-white flex justify list-style-none noto gap fs-200">
                    <li><a href="/">ホーム</a></li>
                    <li><a href="/">選ばれる理由</a></li>
                    <li><a href="/">サービス紹介</a></li>
                    <li><a href="/">わたしたちの歩み</a></li>
                    <li><a href="/">未来への取組み</a></li>
                    <li><a href="/">当社について</a></li>
                    <li><a href="/">採用情報</a></li>
                    <li><a href="/" className="nav-end">お知らせ</a></li>
                </ul>
            </nav>
        </div>
        <div className="foot-note">
            <h5 className="text-align spacing-1">©KADAI Co., Ltd.</h5>
        </div>
    </footer>
  </div>
  );
}

export default App;
