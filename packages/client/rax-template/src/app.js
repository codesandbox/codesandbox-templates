import { createElement, render } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import UniversalDriver from 'driver-universal';

const App = () => {

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

render(<App />, null, { driver: UniversalDriver });
