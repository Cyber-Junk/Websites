import SponsCard from './SponsCard'
import data from '../Data/Sponsor.json';

function Sponsors() {
    return (
        <div className="d-flex justify-content-around flex-wrap m-5">
            {data.map(el => {
                return <SponsCard id={el.id} src={el.link} post={el.post}/>
            })}
        </div>
    )
}

export default Sponsors