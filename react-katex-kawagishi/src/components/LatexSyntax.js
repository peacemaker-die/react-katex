import './LatexSyntax.css';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';

const LatexSyntax = () => {
    return (
        <main>
            <code>基本的な数式</code>
            <table className="tableLayout1">
                <caption><InlineMath math={'fig.1'}/>基本的なコマンド</caption>
                <tr>
                    <th>文字</th>
                    <th>コマンド</th>
                    <th>備考</th>
                </tr>
                <tr>
                    <td><InlineMath math={'\\times'}/></td>
                    <td>\times</td>
                    <td>英語と同じ</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\div'}/></td>
                    <td>\div</td>
                    <td>英語と同じ(divide)</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\dfrac{a}{b}'}/></td>
                    <td>\dfrac{'{'}a{'}'}{'{'}b{'}'}</td>
                    <td>分子、分母の順</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\sqrt[a]{b}'}/></td>
                    <td>\sqrt[a]{'{'}b{'}'}</td>
                    <td>a(指数)が2の場合はaは省略可能</td>
                </tr>
                <tr>
                    <td><InlineMath math={'a^{b+3}'}/></td>
                    <td>a^{'{'}b{'}'}</td>
                    <td>{'{'} {'}'}は形式的につけておく</td>
                </tr>
            </table>
            <p>記入例</p>
            <BlockMath math={'\\pm b'}/>
            <BlockMath math={'c = a \\times b'}/>
            <BlockMath math={'a + b - c = d'}/>
            <BlockMath math={'a \\times b \\div c = d'}/>
            <BlockMath math={'\\dfrac{a}{b}'}/>
            <BlockMath math={'a^{b}'}/>
            <BlockMath math={'\\sqrt{\\frac{a}{3}}'}/>
            <BlockMath math={'\\frac{a}{b}'}/>
            <BlockMath math={'\\dfrac{\\;a\\;}{\\;b\\;}'}/>
            <BlockMath math={'\\sqrt[a]{b\\;}'}/>
            <BlockMath math={'y=f(x)'}/>
            <hr/>
            <code>ギリシャ文字</code>
            <table className="tableLayout2">
                <caption><InlineMath math={'fig.2'}/>ギリシャ文字</caption>
                <tr>
                    <th>文字</th>
                    <th className="borderright">コマンド</th>
                    <th>文字</th>
                    <th>コマンド</th>
                </tr>
                <tr>
                    <td><InlineMath math={'\\alpha'}/></td>
                    <td className="borderright">\alpha</td>
                    <td><InlineMath math={'\\beta'}/></td>
                    <td>\beta</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\Gamma'}/></td>
                    <td className="borderright">\Gamma</td>
                    <td><InlineMath math={'\\gamma'}/></td>
                    <td>\gamma</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\Delta'}/></td>
                    <td className="borderright">\Delta</td>
                    <td><InlineMath math={'\\delta'}/></td>
                    <td>\delta</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\epsilon'}/></td>
                    <td className="borderright">\epsilon</td>
                    <td><InlineMath math={'\\varepsilon'}/></td>
                    <td>\varepsilon</td>
                </tr>
                <tr>
                    <td><InlineMath math={'\\zeta'}/></td>
                    <td className="borderright">\zeta</td>
                    <td><InlineMath math={'\\eta'}/></td>
                    <td>\eta</td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="borderright"></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <hr/>
            <BlockMath math={'a^{b}=c'}/>
            <BlockMath math={'\\hspace{8.5mm}a^{b}=c'}/>
            <BlockMath math={'\\neq'}/>
            <BlockMath math={
                '\\left\\lbrace\\dfrac ab \\right.'
            }/>
            <BlockMath math={'(\\dfrac{b}{a})'}/>
            <BlockMath math={'\\left(\\dfrac{b}{a}\\right)'}/>
            <BlockMath math={
                '\\left\\{' +
                '\\begin{array}{c}' +
                '\\alpha +\\beta = -\\dfrac {\\;b\\;}{\\;a\\;}\\\\\\\\' +
                '\\alpha\\beta = \\dfrac {\\;c\\;}{\\;a\\;}' +
                '\\end{array}' +
                '\\right.'
            }/>
            <BlockMath math={'\\displaystyle\\prod_{i=1}^{n}'}/>
            <BlockMath math={'\\prod_{i=1}^{n}'}/>
            <BlockMath math={'\\;_{n}\\mathrm{P}_{r}'}/>
            <BlockMath math={'\\;_{n}\\mathrm{C}_{r}'}/>
            <BlockMath math={'n!=\\prod_{i=1}^{n}' +
            '=1\\times2\\times3\\times\\dots\\times(n-1)\\times n'}/>
            <BlockMath math={'a\\equiv b\\hspace{5mm}(mod\\;n)'}/>
            <BlockMath math={'a^{p-1}\\equiv 1\\hspace{5mm}(mod\\;p)'}/>
            <BlockMath math={'\\sum_{k=1}^{n}'}/>
            <hr/>
            <code>相加平均・相乗平均</code>
            <p><InlineMath math={'\\hspace{20mm}a>0,b>0'}/>において
                <InlineMath math={'a+b\\geqq2\\sqrt{ab}\\hspace{5mm}'}/>(等号成立は
                <InlineMath math={'a=b)'}/></p>
            <code>コーシー・シュワルツの不等式</code>
            <p><InlineMath
                math={'\\hspace{18mm}\\left(\\displaystyle\\sum_{i=1}^{n}a_i^2\\right)' +
                '\\left(\\displaystyle\\sum_{i=1}^{n}b_i^{2}\\right)\\geqq' +
                '\\left(\\displaystyle\\sum_{i=1}^{n}a_ib_i\\right)^2'}/>
            </p>
            <p><InlineMath math={'\\hspace{20mm}'}/>等号成立は<InlineMath
                math={'\\hspace{3mm}\\dfrac{a_1}{b_1}=\\dfrac{a_2}{b_2}=\\cdots=\\dfrac{a_n}{b_n}'}/>
            </p>
            <hr/>
            <code>二項定理</code>
            <p><InlineMath
                math={'(a+b){^n}=\\;_{n}\\mathrm{C}{_0}{a}^{n}{b}^{0}+{_n}\\mathrm{C}_{1}a^{n-1}b^{1}+\\cdots+{_n}\\mathrm{C}_{n-2}a^{2}b^{n-2}+{_n}\\mathrm{C}_{n-1}a^{1}b^{n-1}+{_n}\\mathrm{C}_{n}a^{0}b^{n}'}/>
            </p>
            <p>
                <InlineMath math={'=\\displaystyle\\sum_{k=0}^{n}{_n}\\mathrm{C}{_k}a^{n-k}b^{k}'}/>
            </p>
            <hr/>
            <code>部分分数分解</code>
            
        </main>
    )
};

export default LatexSyntax;