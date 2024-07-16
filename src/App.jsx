import Body from "./components/Body";
import {Toaster} from 'react-hot-toast';

let App = () => {
  return (
    <div className="flex items-center justify-center p-4 h-screen">
      <Body/>
      <Toaster/>
    </div>
  );
};
export default App;
