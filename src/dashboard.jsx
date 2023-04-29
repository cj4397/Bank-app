


function Dashboard() {
    return (
        <>
            <main>
                <section className="box">
                    <div className="columns is-vcentered is-full">
                        <section className="column  is-half " id="card">
                            <div id="card" className="box">
                                <div id="balance">
                                    balance
                                </div>
                                <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                                    <div className="is-flex is-flex-direction-column ">
                                        <div id="card_no">card_no</div>
                                        <div id="card_expire">card_expire</div>
                                    </div>
                                    <div id="card_type" className="is-flex is-align-items-flex-end  ">
                                        <span>card_type</span>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section id="controls" className=" is-flex is-flex-direction-column w-100" >
                            <div className=" is-flex is-flex-direction-row is-justify-content-space-evenly">
                                <div className="">
                                    <button className=" ctrl_btn ">Deposit</button>
                                </div>
                                <div className="">
                                    <button className=" ctrl_btn "> Withdraw</button>
                                </div>
                            </div>
                            <div className="is-flex is-flex-direction-row is-justify-content-space-evenly">
                                <div className="">
                                    <button className=" ctrl_btn  ">Transfer</button>
                                </div>
                                <div className="">
                                    <button className=" ctrl_btn  ">Invest</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="columns is-vcentered is-full box">
                            summary and stuff
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Dashboard