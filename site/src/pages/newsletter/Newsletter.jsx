import Style from './Newsletter.module.css';
import NewsletterComponente from '../../components/newsletter/newsletter';


function Newsletter() {
  return (
    <>
      <div className={Style['corpo']}>
        <NewsletterComponente />
      </div>
    </>
  );
}

export default Newsletter;