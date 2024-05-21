import "./Forma.css"

function Forma() {
    return (
        <>
            <div className="formaDiv">
                <div className="formaTitle">
                    <span>MAAB academy bilan BI kelajagingizni oching! Hozir ro'yxatdan o'ting.</span>
                    <p>Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega bo'ling</p>
                </div>
                <div>
                    <form>
                        <div>
                            <p>Kursga yozilish.</p>
                        </div>
                        <div className="formInfo">
                            <section>
                                <label htmlFor="ism">Ismingiz</label><br />
                                <input type="text" id="ism" placeholder="Abbos" />
                            </section>
                            <section>
                                <label htmlFor="telefon">Telefon raqamingiz</label><br />
                                <input type="text" id="telefon" placeholder="+998" />
                            </section>
                        </div>
                        <div className="formInfo">
                            <section>
                                <label htmlFor="ism">Ingliz tili darajangiz</label><br />
                                <select name="" id="">
                                    <option value="">Daraja</option>
                                    <option value="">Beginer</option>
                                    <option value="">Elementry</option>
                                </select>
                            </section>
                            <section>
                                <label htmlFor="telefon">Mantiqiy bilim darajangiz</label><br />
                                <select name="" id="">
                                    <option value="">Daraja</option>
                                    <option value="">Beginer</option>
                                    <option value="">Intermedite</option>
                                </select>
                            </section>
                        </div>
                        <div  className="formInfo">
                            <section className="checkBox">
                                <input type="checkbox" className="check"/>
                                <label htmlFor="">Arizani topshirish orqali siz shaxsiy ma'lumotlaringizni <span>"Maxfiylik siyosati"</span>ga muvofiq qayta ishlashga rozilik bildirasizmi</label>
                            </section>
                            <section className="submitBtn">
                                <button>Arizani jo'natish </button>
                            </section>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Forma;