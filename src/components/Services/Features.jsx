import Cards from './Cards';
const Features = () => {
    return (
        <>
        <section className="w3l-features">
        <div className="features py-5">
            <div className="container py-md-3">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <Cards/>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-md-0 mt-5">
                        <Cards/>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-lg-0 mt-5">
                        <Cards/>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-5">
                        <Cards/>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-5">
                        <Cards/>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-5">
                        <Cards/>
                    </div>
                </div>
            </div>
        </div>

        </section>
        
        </>
    )
}

export default Features