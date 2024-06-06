import EleLogin from '../../components/eleLogin/EleLogin'
import ImgLogin from '../../components/eleLogin/ImgLogin';
import Style from './Login.module.css';

function Login() {
  return (
    <>
      <div className={Style['corpo']}>
        <ImgLogin />
        <EleLogin />
      </div>
    </>
  );
}

export default Login;