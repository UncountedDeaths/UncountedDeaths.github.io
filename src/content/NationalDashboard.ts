export type DataSourceType = {
  id: string;
  name: string;
  source: string[];
};

export const dataSources: DataSourceType[] = [
  {
    id: 'excessMortality',
    name: 'Excess Mortality Rates',
    source: ['https://datawrapper.dwcdn.net/g01tG/3/', 'https://datawrapper.dwcdn.net/9XHiP/'],
  },
  {
    id: 'underreporting',
    name: 'Underreporting Rates',
    source: ['https://datawrapper.dwcdn.net/lApr0/4/', 'https://datawrapper.dwcdn.net/lApr0/4/'],
  },
];
