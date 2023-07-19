export default function Art({showDuck,art}){


    return(
        <img onclick ={()=>showArt(art)} src={art.image} alt= {art.title}/>
    )

}
