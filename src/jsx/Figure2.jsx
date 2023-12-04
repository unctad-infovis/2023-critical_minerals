import React, { useState, useEffect } from 'react';

// Load helpers.
import ChartSankey from './components/ChartSankey.jsx';

import '../styles/styles.less';

function Figure1() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = () => [{
    data: [
      // Node 0: Cobalt ore
      ['Node 0: Democratic Republic of the Congo', 'Node 1: China', 140121713, '#ded9d5'],
      ['Node 0: Democratic Republic of the Congo', 'Node 1: Morocco', 26506016, '#ded9d5'],
      ['Node 0: Democratic Republic of the Congo', 'Node 1: Zambia', 586969, '#ded9d5'],
      ['Node 0: Austria', 'Node 1: Finland', 16398184, '#ded9d5'],
      ['Node 0: Austria', 'Node 1: Netherlands', 46, '#ded9d5'],
      ['Node 0: Netherlands', 'Node 1: Belgium', 2000650, '#ded9d5'],
      ['Node 0: Netherlands', 'Node 1: Italy', 1408316, '#ded9d5'],
      ['Node 0: Netherlands', 'Node 1: Oman', 71815, '#ded9d5'],
      // Node 1: Processing (Cobalt hydroxide)
      ['Node 1: Democratic Republic of the Congo', 'Node 2: China', 5741004434, '#ded9d5'],
      ['Node 1: Democratic Republic of the Congo', 'Node 2: Namibia', 116209354, '#ded9d5'],
      ['Node 1: Democratic Republic of the Congo', 'Node 2: Rep. of Korea', 90388571, '#ded9d5'],
      ['Node 1: China', 'Node 2: Rep. of Korea', 200099027, '#ded9d5'],
      ['Node 1: China', 'Node 2: Japan', 34348128, '#ded9d5'],
      ['Node 1: China', 'Node 2: Spain', 30513842, '#ded9d5'],
      ['Node 1: Finland', 'Node 2: Japan', 289171000, '#ded9d5'],
      ['Node 1: Finland', 'Node 2: Belgium', 122808157, '#ded9d5'],
      ['Node 1: Finland', 'Node 2: United States', 68948001, '#ded9d5'],
      // Node 2: Manufacturing (Battery materials)
      ['Node 2: China', 'Node 3: Rep. of Korea', 2990519760, '#ded9d5'],
      ['Node 2: China', 'Node 3: Japan', 983937756, '#ded9d5'],
      ['Node 2: China', 'Node 3: Poland', 637468064, '#ded9d5'],
      ['Node 2: Rep. of Korea', 'Node 3: Poland', 1943402713, '#ded9d5'],
      ['Node 2: Rep. of Korea', 'Node 3: China', 351486805, '#ded9d5'],
      ['Node 2: Rep. of Korea', 'Node 3: Japan', 329256727, '#ded9d5'],
      ['Node 2: Japan', 'Node 3: Poland', 493318095, '#ded9d5'],
      ['Node 2: Japan', 'Node 3: China', 242193888, '#ded9d5'],
      ['Node 2: Japan', 'Node 3: Rep. of Korea', 97569348, '#ded9d5'],
      // Node 3: Manufacturing (Cell components)
      ['Node 3: China', 'Node 4: United States', 10550408722, '#ded9d5'],
      ['Node 3: China', 'Node 4: Germany', 8691576979, '#ded9d5'],
      ['Node 3: China', 'Node 4: Rep. of Korea', 5584819591, '#ded9d5'],
      ['Node 3: Poland', 'Node 4: Germany', 4228762086, '#ded9d5'],
      ['Node 3: Poland', 'Node 4: Mexico', 1474138843, '#ded9d5'],
      ['Node 3: Poland', 'Node 4: Belgium', 753438185, '#ded9d5'],
      ['Node 3: Rep. of Korea', 'Node 4: United States', 3467622016, '#ded9d5'],
      ['Node 3: Rep. of Korea', 'Node 4: Germany', 845010630, '#ded9d5'],
      ['Node 3: Rep. of Korea', 'Node 4: Poland', 554210039, '#ded9d5'],
      // Node 4: EVs
      ['Node 4: Germany', 'Node 5: United Kingdom', 4406622054, '#ded9d5'],
      ['Node 4: Germany', 'Node 5: United States', 3800210751, '#ded9d5'],
      ['Node 4: Germany', 'Node 5: Norway', 3625245105, '#ded9d5'],
      ['Node 4: China', 'Node 5: United Kingdom', 3933514188, '#ded9d5'],
      ['Node 4: China', 'Node 5: United Arab Emirates', 1271952172, '#ded9d5'],
      ['Node 4: China', 'Node 5: Australia', 1267248539, '#ded9d5'],
      ['Node 4: China', 'Node 5: Norway', 1267095725, '#ded9d5'],
      ['Node 4: United States', 'Node 5: Canada', 4144765644, '#ded9d5'],
      ['Node 4: United States', 'Node 5: Germany', 4049393741, '#ded9d5'],
      ['Node 4: United States', 'Node 5: Rep. of Korea', 1148409504, '#ded9d5']
    ],
    nodes: [{
      color: '#009edb',
      column: 0,
      id: 'Node 0: Democratic Republic of the Congo',
      name: 'Dem. Rep. of Congo'
    }, {
      color: '#009edb',
      column: 0,
      id: 'Node 0: Austria',
      name: 'Austria'
    }, {
      color: '#009edb',
      column: 0,
      id: 'Node 0: Netherlands',
      name: 'Netherlands'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: China',
      name: 'China'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Morocco',
      name: 'Morocco'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Zambia',
      name: 'Zambia'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Finland',
      name: 'Finland'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Netherlands',
      name: 'Netherlands'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Belgium',
      name: 'Belgium'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Italy',
      name: 'Italy'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Oman',
      name: 'Oman'
    }, {
      color: '#009edb',
      column: 1,
      id: 'Node 1: Democratic Republic of the Congo',
      name: 'Dem. Rep. of Congo'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: China',
      name: 'China'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: Namibia',
      name: 'Namibia'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: Rep. of Korea',
      name: 'Rep. of Korea'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: Japan',
      name: 'Japan'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: Spain',
      name: 'Spain'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: Belgium',
      name: 'Belgium'
    }, {
      color: '#009edb',
      column: 2,
      id: 'Node 2: United States',
      name: 'United States'
    }, {
      color: '#009edb',
      column: 3,
      id: 'Node 3: Rep. of Korea',
      name: 'Rep. of Korea'
    }, {
      color: '#009edb',
      column: 3,
      id: 'Node 3: Japan',
      name: 'Japan'
    }, {
      color: '#009edb',
      column: 3,
      id: 'Node 3: Poland',
      name: 'Poland'
    }, {
      color: '#009edb',
      column: 3,
      id: 'Node 3: China',
      name: 'China'
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: China',
      name: 'China'
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: United States',
      name: 'United States'
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: Germany',
      name: 'Germany'
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: Rep. of Korea',
      name: 'Rep. of Korea',
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: Mexico',
      name: 'Mexico',
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: Belgium',
      name: 'Belgium',
    }, {
      color: '#009edb',
      column: 4,
      id: 'Node 4: Poland',
      name: 'Poland',
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: United Arab Emirates',
      name: 'United Arab Emirates'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: Australia',
      name: 'Australia'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: United Kingdom',
      name: 'United Kingdom'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: United States',
      name: 'United States'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: Norway',
      name: 'Norway'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: Canada',
      name: 'Canada'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: Germany',
      name: 'Germany'
    }, {
      color: '#009edb',
      column: 5,
      id: 'Node 5: Rep. of Korea',
      name: 'Rep. of Korea'
    }],
    keys: ['from', 'to', 'weight', 'color']
  }];

  useEffect(() => {
    setDataFigure(cleanData());
  }, []);

  return (
    <div className="app">
      {dataFigure && (
      <ChartSankey
        column_labels_1={['Extraction', 'Processing', 'Manufacturing of parts', 'End users']}
        column_labels_2={['Cobalt<br />ore', 'Cobalt<br />hydroxide', 'Battery<br />materials', 'Cell<br />components', 'Electric<br />vehicles']}
        data={dataFigure}
        idx="2"
        note={false}
        source="UNCTAD calculations"
        subtitle="Cobalt trade flows along the EV value chain, US$, 2022"
        title="Adding value to cobalt in the electric vehicle value chain"
        ylabel=""
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1;
