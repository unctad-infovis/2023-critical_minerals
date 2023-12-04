import React, { useState, useEffect } from 'react';

// Load helpers.
import ChartSankey from './components/ChartSankey.jsx';

import '../styles/styles.less';

function Figure1() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = () => [{
    data: [
      ['Node 0: Democratic Republic of the Congo', 'Node 1: China', 74, '#ded9d5'],
      ['Node 0: Democratic Republic of the Congo', 'Node 1: Morocco', 14, '#ded9d5'],
      ['Node 0: Democratic Republic of the Congo', 'Node 1: Zambia', 0.3, '#ded9d5'],
      ['Node 0: Austria', 'Node 1: Finland', 8.6, '#ded9d5'],
      ['Node 0: Austria', 'Node 1: Netherlands', 0.00002, '#ded9d5'],
      ['Node 0: Netherlands', 'Node 1: Belgium', 1, '#ded9d5'],
      ['Node 0: Netherlands', 'Node 1: Italy', 0.7, '#ded9d5'],
      ['Node 0: Netherlands', 'Node 1: Oman', 0.04, '#ded9d5'],
      // Node 1: Processing (Cobalt hydroxide)
      ['Node 1: Democratic Republic of the Congo', 'Node 2: China', 62, '#ded9d5'],
      ['Node 1: Democratic Republic of the Congo', 'Node 2: Namibia', 1.3, '#ded9d5'],
      ['Node 1: Democratic Republic of the Congo', 'Node 2: Rep. of Korea', 1, '#ded9d5'],
      ['Node 1: China', 'Node 2: Rep. of Korea', 2.2, '#ded9d5'],
      ['Node 1: China', 'Node 2: Japan', 0.4, '#ded9d5'],
      ['Node 1: China', 'Node 2: Spain', 0.3, '#ded9d5'],
      ['Node 1: Finland', 'Node 2: Japan', 3.1, '#ded9d5'],
      ['Node 1: Finland', 'Node 2: Belgium', 1.3, '#ded9d5'],
      ['Node 1: Finland', 'Node 2: United States', 0.7, '#ded9d5'],
      // Node 2: Manufacturing (Battery materials)
      ['Node 2: China', 'Node 3: Rep. of Korea', 30, '#ded9d5'],
      ['Node 2: China', 'Node 3: Japan', 10, '#ded9d5'],
      ['Node 2: China', 'Node 3: Poland', 6.5, '#ded9d5'],
      ['Node 2: Rep. of Korea', 'Node 3: Poland', 19.7, '#ded9d5'],
      ['Node 2: Rep. of Korea', 'Node 3: China', 3.6, '#ded9d5'],
      ['Node 2: Rep. of Korea', 'Node 3: Japan', 3.3, '#ded9d5'],
      ['Node 2: Japan', 'Node 3: Poland', 5, '#ded9d5'],
      ['Node 2: Japan', 'Node 3: China', 2.5, '#ded9d5'],
      ['Node 2: Japan', 'Node 3: Rep. of Korea', 1, '#ded9d5'],
      // Node 3: Manufacturing (Cell components)
      ['Node 3: China', 'Node 4: United States', 9.6, '#ded9d5'],
      ['Node 3: China', 'Node 4: Germany', 7.9, '#ded9d5'],
      ['Node 3: China', 'Node 4: Rep. of Korea', 5.1, '#ded9d5'],
      ['Node 3: Poland', 'Node 4: Germany', 3.9, '#ded9d5'],
      ['Node 3: Poland', 'Node 4: Mexico', 1.3, '#ded9d5'],
      ['Node 3: Poland', 'Node 4: Belgium', 0.7, '#ded9d5'],
      ['Node 3: Rep. of Korea', 'Node 4: United States', 3.2, '#ded9d5'],
      ['Node 3: Rep. of Korea', 'Node 4: Germany', 0.8, '#ded9d5'],
      ['Node 3: Rep. of Korea', 'Node 4: Poland', 0.5, '#ded9d5'],
      // Node 4: EVs
      ['Node 4: Germany', 'Node 5: United Kingdom', 3.4, '#ded9d5'],
      ['Node 4: Germany', 'Node 5: United States', 2.9, '#ded9d5'],
      ['Node 4: Germany', 'Node 5: Norway', 2.8, '#ded9d5'],
      ['Node 4: China', 'Node 5: United Kingdom', 3, '#ded9d5'],
      ['Node 4: China', 'Node 5: United Arab Emirates', 0.99, '#ded9d5'],
      ['Node 4: China', 'Node 5: Australia', 0.98, '#ded9d5'],
      ['Node 4: China', 'Node 5: Norway', 0.98, '#ded9d5'],
      ['Node 4: United States', 'Node 5: Canada', 3.2, '#ded9d5'],
      ['Node 4: United States', 'Node 5: Germany', 3.1, '#ded9d5'],
      ['Node 4: United States', 'Node 5: Rep. of Korea', 0.9, '#ded9d5']
    ],
    nodes:
      [{
        color: '#009edb',
        column: 0,
        id: 'Node 0: Democratic Republic of the Congo',
        name: 'Dem. Rep. of Congo'
      }, {
        color: '#009edb',
        column: 0,
        id: 'Node 0: Austria',
        name: 'Austria',
      }, {
        color: '#009edb',
        column: 0,
        id: 'Node 0: Netherlands',
        name: 'Netherlands',
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
        name: 'Italy',
        offset: -5
      }, {
        color: '#009edb',
        column: 1,
        id: 'Node 1: Oman',
        name: 'Oman',
        offset: -10
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
        id: 'Node 4: China',
        column: 4,
        color: '#009edb',
        name: 'China',
        offset: -20
      }, {
        id: 'Node 4: United States',
        column: 4,
        color: '#009edb',
        name: 'United States',
        offset: -10
      }, {
        id: 'Node 4: Germany',
        column: 4,
        color: '#009edb',
        name: 'Germany'
      }, {
        color: '#009edb',
        column: 4,
        id: 'Node 4: Rep. of Korea',
        name: 'Rep. of Korea'
      }, {
        color: '#009edb',
        column: 4,
        id: 'Node 4: Mexico',
        name: 'Mexico'
      }, {
        color: '#009edb',
        column: 4,
        id: 'Node 4: Belgium',
        name: 'Belgium'
      }, {
        color: '#009edb',
        column: 4,
        id: 'Node 4: Poland',
        name: 'Poland'
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
        name: 'United States',
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
        data_type="percentage"
        idx="1"
        note={false}
        source="UNCTAD calculations"
        subtitle="Cobalt trade flows along the EV value chain, percentage of total exports, 2022"
        title="Cobalt market consentration in the electric vehicle value chain"
        ylabel=""
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1;
