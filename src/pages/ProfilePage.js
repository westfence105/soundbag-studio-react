import React from 'react';

import "../App.css";
import "./ProfilePage.css";

const ProfilePage = () => (
        <div className="profile-page">
            <div className="page-content">
                <img src="profile_ym.png" alt="profile-icon" width="128" height="128"/>
                <div className="my-name">西垣 灯悟</div>
                <div className="my-namespace">(soundbag)</div>
                <div className="profile-text">
                    <p>1995(平成7)年12月生まれ</p>
                    <p>東京都町田市出身</p>
                    <p>読書と音楽が好きで、中学時代は3年間吹奏楽部・図書委員</p>
                    <p>病気により高校を中退し、それ以降も数年間療養</p>
                    <p>その間自宅でプログラミングの技術を磨く</p>
                    <p>並行してクラウドソーシングで音楽制作の依頼を請ける</p>
                    <p>2018(平成30)年1月、個人事業主として開業</p>
                </div>
                <hr />
                <div className="asct-notice">
                    <h3>特定商取引法に基づく表記</h3>
                    <table>
                        <tbody>
                            <tr><th>事業者名</th><td>soundbag</td></tr>
                            <tr><th>代表・責任者</th><td>西垣 灯悟</td></tr>
                            <tr><th>WEBサイト</th><td>https://soundbag-studio.com/</td></tr>
                            <tr><th>E-Mail</th><td>contact@soundbag-studio.com</td></tr>
                            <tr><th>所在地</th><td>東京都町田市　※詳細はメールまたは問い合わせフォームよりお問い合わせください</td></tr>
                            <tr><th>電話番号</th><td>090-3451-5397　※電話でのお問い合わせはご遠慮ください</td></tr>
                            <tr><th>業務内容</th>
                                <td><ul>
                                    <li>ソフトウェアの開発・テスト</li>
                                    <li>作曲・編曲・楽譜作成・打ち込みでの音源作成</li>
                                    <li>コンピュータ関連の設定、データ作成、学習サポートなど</li>
                                    <li>作曲・音楽制作のサポート、サウンドプロデュースなど</li>
                                </ul></td>
                            </tr>
                            <tr><th>料金</th><td>各サイトに別途記載。</td></tr>
                            <tr><th>報酬以外の必要料金</th><td>銀行振込の場合は振込手数料、他サイト経由の場合は当該サイトの利用手数料</td></tr>
                            <tr><th>注文方法</th><td>問い合わせフォーム・メールから依頼<br/>各クラウドソーシングサイト経由で依頼</td></tr>
                            <tr><th>支払い方法</th><td>直接取引の場合は原則銀行振込<br/>他サイト経由の場合は当該サイトの決済方法</td></tr>
                            <tr><th>支払い時期</th><td>直接取引の場合はそれぞれ個別に定める<br/>他サイト経由の場合は当該サイトの規定に順ずる</td></tr>
                            <tr><th>納品までの期間</th><td>案件ごとに個別に見積もり、相談し決定</td></tr>
                            <tr><th>返品・キャンセル等</th><td>制作系の場合、基本的にお客様都合でのキャンセルは不可<br/>やむなくキャンセルとなった場合も原則それまで支払われた料金の返金はできかねます</td></tr>
                            <tr><th>著作権の扱い</th><td>契約時に<b>契約書に明記</b></td></tr>
                        </tbody>
                    </table>
                    <p className="note">※省略されている事項については、問い合わせがあった場合遅滞なく開示するものとします。</p>
                </div>
            </div>
        </div>
);

export default ProfilePage;
