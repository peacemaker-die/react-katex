import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const ExamplePage = () => {
  const expressions = {
    level1 : String.raw`\int_0^\infty x^2 dx`,
  };
  return (
      <div
          style={{
            width: '40%',
            margin: '0 auto'
          }}
      >
        <h2>
          <code>{'<InlineMath />'}</code>
        </h2>
        This is an in-line expression <InlineMath
          math={'\\int_0^\\infty x^2 dx'}/>{' '}
        passed as <code>math prop</code>. This is an in-line{' '}
        <InlineMath math={'\\int_0^\\infty x^2 dx'}/> expression passed as{' '}
        <code>children prop</code>.
        <h2>
          <code>{'<BlockMath />'}</code>
        </h2>
        <BlockMath math={expressions.level1} />
        <BlockMath math={'\\int_0^\\infty x^2 dx'}/>
        <BlockMath>{`A =
        \\begin{pmatrix}
        1 & 0 & 0 \\\\
        0 & 1 & 0 \\\\
        0 & 0 & 1 \\\\
        \\end{pmatrix}`}</BlockMath>
        <h2>Error handling</h2>
        <BlockMath math={'\\int_0^\\infty x^2 dx \\inta'}
                   errorColor={'#cc0000'}/>
        <BlockMath
            math="\\int_{"
            renderError={err => <b>Custom error message: {err.name}</b>}
        />
        <BlockMath math="\sum_{"/>
        <BlockMath
            math={'\\sum_{'}
            renderError={err => <b>Custom error message: {err.name}</b>}
        />
        <BlockMath math={123}/>
        <BlockMath
            math={123}
            renderError={err => <b>Custom error message: {err.name}</b>}
        />
      </div>
  );
};

export default ExamplePage;