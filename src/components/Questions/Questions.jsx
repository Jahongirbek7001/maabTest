import "./Questions.css";


function Questions() {

    return (
        <>
            <div className="questionsDiv">
                <div className="questionsContent">
                    <div className="questionsTitle">
                        <span>KO'P SO'RALGAN SAVOLLAR</span>
                        <p>Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их навыки <br /> английского языка, математики и решения задач.</p>
                    </div>
                    <div className="accordion" id="accordionExample">
                        {/* 1 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Bu sohada mening bilimim va tajribam yo'q. Darlarni o'zlashtirishda menda qiyinchiliklar bo'lmaydimi?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari qiyinlashmoqda. Aynan shu yerda biznes tahlili texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin.
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Kursni tugatgandan so'ng sertifikat beriladimi ?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum reiciendis a sequi, corrupti quibusdam repudiandae voluptas modi cum error commodi pariatur, ratione quidem? Delectus voluptas eaque numquam totam odit.
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Dasturlash Foundation kursini boshlashdan oldin nimalari bilish kerak ?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum reiciendis a sequi, corrupti quibusdam repudiandae voluptas modi cum error commodi pariatur, ratione quidem? Delectus voluptas eaque numquam totam odit.
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Kursdan foyda olmasam pulim qaytarilib beriladimi ?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum reiciendis a sequi, corrupti quibusdam repudiandae voluptas modi cum error commodi pariatur, ratione quidem? Delectus voluptas eaque numquam totam odit.
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Dasturlash foundation kursini bitirib o'quvchi qanday ko'nikmalarga ega bo'lishi kerak ?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum reiciendis a sequi, corrupti quibusdam repudiandae voluptas modi cum error commodi pariatur, ratione quidem? Delectus voluptas eaque numquam totam odit.
                                </div>
                            </div>
                        </div>
                        {/* 6 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Kursni sotib olsam undan doim foydalana olamanmi ?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum reiciendis a sequi, corrupti quibusdam repudiandae voluptas modi cum error commodi pariatur, ratione quidem? Delectus voluptas eaque numquam totam odit.
                                </div>
                            </div>
                        </div>
                        {/* 7 */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                    Kursda o'qish uchun kompyuterim bo'lishi kerakmi ?
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum reiciendis a sequi, corrupti quibusdam repudiandae voluptas modi cum error commodi pariatur, ratione quidem? Delectus voluptas eaque numquam totam odit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;