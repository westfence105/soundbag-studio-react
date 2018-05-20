import React from 'react';

import "../App.css";
import "./AboutPage.css";

const AboutPage = () => (
        <div className="about-page">
            <h1 className="page-title">ABOUT</h1>
            <hr className="star" />
            <div className="page-content">
                <p>フリーランスエンジニア・サウンドクリエイターのsoundbagの公式サイトです。</p>
                <p>soundbag studioでは、ソフトウェア開発と音楽制作という、全く異なる2つの事業を行っています。</p>
                <p>考え方、脳の使い方から異なる2つの分野ですが、共通点もいくつかあります。</p>
                <p>その1つは、依頼者と細かくコミュニケーションを取りながらより良いものを創っていくということ。</p>
                <p>そして、自室が「スタジオ」となること。</p>
                <p>4畳半の部屋の中から、世界と繋がり、新しいものを創り出していきます。</p>
            </div>
        </div>
);

export default AboutPage;
