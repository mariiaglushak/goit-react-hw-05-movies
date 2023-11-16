import { Grid } from 'react-loader-spinner';
import { SpeenerBlock } from './LoaderStyle';
const Loader = () => {
  return (
    <SpeenerBlock>
      <Grid
        height="80"
        width="80"
        color="#3b0d5e"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpeenerBlock>
  );
};
export default Loader;
