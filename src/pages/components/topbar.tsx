import style from '../../styles/Home.module.css'
export default function Home() {
    return (
        <>
        <div className={style.topbar}>
            <div className={style.brand } >
                <img src="http://via.placeholder.com/200x100"></img>
                <h1>Website Name</h1>
            </div>
            <div className={style.brand2 } >
                <div style={{width: '100%', height: '70px'}}></div>
                <p style={{margin: '5px 0'}}>Search</p>
                <input type="text" name="search" placeholder="Search.."/>
                
            </div>

        </div>
        </>
    )
}