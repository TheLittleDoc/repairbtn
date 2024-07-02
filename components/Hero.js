import styles from "./Hero.module.css"

export default function Hero({imageSource, height}) {
    //remove letters from height
    const numHeight = height.replace(/\D/g, '');
    //if height is a number, add px to it
    if(!isNaN(numHeight)){
        height = `${numHeight}px`;
    }



    return(

        <>
            <style>
                {`
                    div{
                        --height: ${height};
                    }
                    @media(max-width: 768px){
                        div{
                            --height: 35vh;
                        }
                    }
                `
                }

            </style>
            <div className={styles.heroDiv} style={{backgroundImage: `url(${imageSource})`, height: `var(--height)`}}>

            </div>
        </>
    )
}