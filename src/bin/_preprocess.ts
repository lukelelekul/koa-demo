import * as YAML from 'yamljs';

export default () => {
  const { NODE_ENV } = process.env;

  const configFIle = NODE_ENV === 'production' ? '../config.prod.yaml' : '../config.dev.yaml';


};
