import "./Akademiya.css"

function Akademiya() {
    return (
        <>
            <div className="akademiyaDiv">
                <div className="akademiyaTittle">
                    <span>MAAB AKADEMIYASIDA BI IMKONIYATLARINI OCHING</span>
                    <p>Biz nafaqat nazariyani o'rgatamiz, balki o'quvchilarimizga qisqa vaqt ichida global miqyosda raqobatbardosh dasturchi bo'lish imkoniyatini beradigan haqiqiy bilimlarni taqdim etamiz. Sizning karyerangiz butkul o'zgarishi shu erdan boshlanadi.</p>
                </div>
                <div className="cardAkademiyaBox">
                    <section className="cardAkademiya">
                        <div className="cardTitle">
                            <span>DATA ANALYTICS</span>
                            <p>Aniq tushunchalr va tahlillarga sho'ng'ing. Ma'lumotlardan mazmunli namunalarni olish, biznis qarorlarini qabul qilish imkoniyatlarini kengaytirish uchun ilg'or usullarni o'rganing. Bizning amaliy yondashuvimiz sizning ishga tayyor bo'lishingizni taminlaydi.</p>
                        </div>
                        <div className="price">
                            <span>Kurs narxi:</span>
                            <p>23,975,000 so'm</p>
                        </div>
                    </section>
                    <section className="cardAkademiya">
                        <div className="cardTitle">
                            <span>DATA ENGINEERING</span>
                            <p>Ishonchli ma'lumotlar infratuzilmasini qurishni o'rganing. Data engineering sohasida muvafaqqiyatli karyera qurish uchun ma'lumotlar tizimlarini loyihalash va joriy etish ko'nikmalariga ega bo'ling. Haqiqiy loyihalar sizning amaliy tajribangizni oshiradi.</p>
                        </div>
                        <div className="price">
                            <span>Kurs narxi:</span>
                            <p>23,975,000 so'm</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Akademiya;