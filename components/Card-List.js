import { TiTick } from "react-icons/ti";
import style from './../styles/Card.module.css'

const CardList = ({ res }) => {
  return (
    <div >
      <div className={style.companyLogoWithLink}>
        <img height={40} width={100} src={res.companyLogo} alt="" />
        <a className={style.goToSitelink} href={res.gotoSiteUrl}>main site</a>
      </div>

      <p className={style.advertisedRate}>Rate {res.advertisedRate
      } <span className={style.averageMonthlyCost} >Monthly Cost {res.averageMonthlyCost}</span></p>

      <p className={style.pros}>
        <TiTick /> {res.pros[0]} <br />
        {res.pros[1] != null && <TiTick />} {res.pros[1]} <br />
        {res.pros[2] != null && <TiTick />}{res.pros[2]} <br />
        {res.pros[3] != null && <TiTick />}  {res.pros[3]}
      </p>
    </div>
  )
}

export default CardList
