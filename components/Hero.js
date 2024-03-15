import styles from "./Hero.module.css"

export default function Hero({imageSource, height}) {
    return(

        <>
            <div className={styles.heroDiv} style={{"height": `${height}`,"background-image": `url(${imageSource})`}}>

            </div>
        </>
    )
}