import React from 'react';

import "../App.css";
import "./EngineerPage.css";

const EngineerPage = () => (
        <div className="about-page">
            <h1 className="page-title">ENGINEER</h1>
            <hr className="star" />
            <div className="page-content">
                <p>エンジニア分野では、ソフトウェア開発などIT関連の業務を広範囲に扱っています。</p>
                <p>プロジェクトのメンバーとして参加し開発するという形が主です。</p>
                <p>現在はWEBと組み込みが主ですが、分野は絞らず、自分の技術で可能ならばなんでもやってみようと考えています。</p>
                <p>ご依頼は、直接取引の他に<a href="https://www.lancers.jp/profile/westfence105">Lancers</a>、<a href="https://crowdworks.jp/public/employees/106838">CrowdWorks</a>で受け付けています。</p>
                <hr />
                <p>これまでの簡単な技術遍歴を書かせていただきます。</p>
                <ul className="engineer-history">
                    <li>小学校3年生ごろ、図書室にあったマイコン工作の本を見てプログラミングに興味を持つ</li>
                    <li>小学校4年生ごろ、PC（iMac初期型）を買う（中古、1050円）</li>
                    <li>ゲームを作ろうとするも、何から学んでよいかわからず挫折</li>
                    <li>『ホームページ』を作ろうとし、HTMLを学ぶ。タグは&lt;HTML&gt;のように大文字表記</li>
                    <li>中学時代は部活などに時間を取られつつも、デスクトップLinuxを常用していたため多少はスキルを身につける。</li>
                    <li>高専入学。情報工学科。</li>
                    <li>実習でC言語とOpenGLを使い、そこから話が膨らんで友人とゲームを作り始める（現在も未完成）</li>
                    <li>病気により休学、調子の比較的良い時にゲーム開発やPythonでのスクリプト開発など行う</li>
                    <li>Unityでスマートフォンゲームなどを開発している会社で短期間アルバイト。C#のgetter/setter、JenkinsとCIという考え方、PythonのArgumentParserなどに出会う</li>
                    <li>C++11やC++14の最新仕様を追いかけつつ、OpenGL3+GLSLなども試しつつ前述のゲームを進展させようとする（進展せず）</li>
                    <li>Unity・cocos2d-x・MonoGameなど別の開発環境を試す（結局元に戻る）</li>
                    <li>高専退学、その後も療養しつつ、Go、ruby、Kotlin、Adaなどに挑戦</li>
                    <li>突如、Webサービスを開発しようとする（CakePHP+jQuery）</li>
                    <li>しばらく後、そのCakePHP+jQueryを使う仕事を業務委託契約で請け、それをきっかけに開業</li>
                    <li>CakePHP+Bootstrapでこのサイト（リニューアル前）を開発、公開</li>
                    <li>独自ドメインを取得、VPSでHTTPのほかメールサーバも運用開始</li>
                    <li>インターンという形で、組み込み開発を行っている会社に通い始める</li>
                    <li>RaspberryPiを購入、組み込みというよりLinuxサーバーとして運用。このサイトはそこにSSHやSCPで接続して開発しています</li>
                    <li>仕事のため、Reactを学び始める。</li>
                    <li>このサイトをReactでリニューアル</li>
                </ul>
                <p>さまざまな場所に飛び込んでいっては知らない技術に出会い、それを積極的に吸収してきました。</p>
                <p>それはこれからも続きます。経験のない分野であっても、貪欲に挑戦していこうと常に考えています。</p>
            </div>
        </div>
);

export default EngineerPage;
