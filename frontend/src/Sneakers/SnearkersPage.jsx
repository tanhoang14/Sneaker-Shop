import SneakersCard from "./SneakersCard";

const SneakersPage = (props) => {
    const {allSneakers}=props;
    return (  
        <>
        <section className="sneakers-container">
            {allSneakers.map((sneakers)=>{
                return(
                    <div key={sneakers.id}>
                        <SneakersCard 
                            id={sneakers.id} 
                            name={sneakers.name}
                            brand={sneakers.brand}
                            description={sneakers.description}
                            price={sneakers.price}
                            imageUrl={sneakers.imageUrl}
                            />
                    </div>
                )
            })}
        </section>
        </>
    );
}
 
export default SneakersPage;