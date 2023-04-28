


function Dashboard() {
    return (
        <>
            <main>
                <div className="columns is-vcentered is-full">
                    <section className="column  is-half box" id="card">
                        <div id="card">
                            <div id="balance"></div>
                            <div>
                                <div >
                                    <div id="card_no"></div>
                                    <div id="card_expire"></div>

                                </div>
                                <div id="card_type"></div>
                            </div>
                        </div>

                    </section>
                    <section id="controls" className="box w-100" >
                        <div className=" columns is-full ">
                            <div className="column is-half">
                                <button>Deposit</button>
                            </div>
                            <div className="column is-half">
                                <button>Withdraw</button>
                            </div>
                        </div>
                        <div className=" columns is-full">
                            <div className="column is-half">
                                <button>Transfer</button>
                            </div>
                            <div className="column is-half">
                                <button>Invest</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="columns is-vcentered is-full box">
                        summary and stuff
                    </section>
                </div>
            </main>
        </>
    )
}
export default Dashboard