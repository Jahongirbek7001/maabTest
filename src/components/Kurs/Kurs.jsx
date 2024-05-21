import "./Kurs.css"
function Kurs() {
    return (
        <>
            <div>
                <section className="kursTop">
                    <div className="card">
                        <div className="cardImg">
                            <span>Shartnoma asosida</span>
                        </div>
                        <div className="cardInfo">
                            <p>10 oylik kursni shartnoma asosida o'qishingiz mumkin</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <span>Shartli grant</span>
                        </div>
                        <div className="cardInfo">
                            <p>Talant dasturi doirasida kursni bepul o'qib, kurs pulini shu soha bo'yicha ishga kirganingizdan so'ng, oyligingizning bir qismidan to'lashingiz mumkin.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <span>100% Grant</span>
                        </div>
                        <div className="cardInfo">
                            <p>Imtihonlardan kerakli ballarni to'plash orqali kursni 100% bepul o'qishingiz mumkin.</p>
                        </div>
                    </div>
                </section>
                <section className="kursBottom">
                    <h1 className="kursBottomTitle">KURS KIMLAR UCHUN ?</h1>
                    <div className="card2Box">
                        <div className="card2">
                            <span>IT sohasiga qiziquvchilar uchun</span>
                            <p>BI(Business Intelligence)ni o'rganmoqchi bo'lganlar uchun</p>
                        </div>
                        <div className="card2">
                            <span>Zamonaviy va eng talabgir kasb egasi bo'lishni hohlaganalar uchun</span>
                            <p>Hozida BI mutaxasisslariga bo'lgan talab kundan kunga ortib bormoqda va bu kursni o'rganish orqali yuqori daromadli kasb egasi bo'lishingiz mumkin.</p>
                        </div>
                        <div className="card2">
                            <span>Masofadan ishlashni hohlovchilar uchun</span>
                            <p>BI mutaxassislari istalgan joydan masofaviy ishlash imkoniyatiga ega. O'zbekistonda turgan holda Yevropa va Amerika loyihalarida ishlash mumkin.</p>
                        </div>
                        <div className="card2">
                            <span>Mantiqiy va tanqidiy fikrlovchilar uchun</span>
                            <p>BI mutaxassislari ma'lumotlar bazasi bilan ishlaganliklari uchun ulardan mantiqiy va tanqidiy fikrlash talab qilinadi.</p>
                        </div>
                        <div className="card2">
                            <span>Ingliz tili darajsi B2 dan yuqori bo'lganlar uchun</span>
                            <p>Dars asosan ingliz tilida o'tilganligi uchuno'quvchilardan ingliz tilini bilish talab qilinadi.</p>
                        </div>
                        <div className="card2">
                            <span>Tezroq daromadga chiqishni hohlaganlar uchun</span>
                            <p>10 oyda kursni bitirib BI mutaxassisiga aylanish orqali tezroq daromadli kasb egasiga aylanishingiz mumkin.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Kurs;