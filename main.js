let calculate_age = document.getElementById("calculate_age");
let show_age = document.getElementById("show");
calculate_age.addEventListener("click", () => {
  let user_date = document.getElementById("user_date_of_birth").value;

  console.log(user_date);
  let Birth_date = new Date(user_date);
  console.log("ye birth date ha" + Birth_date);
  let Uy = Birth_date.getFullYear();
  let Um = Birth_date.getMonth() + 1;
  let Ud = Birth_date.getDate() + 1;

  let today_date = new Date();
  console.log("ye ajj ke date ha" + today_date);
  let ty = today_date.getFullYear();
  let tm = today_date.getMonth() + 1;
  let td = today_date.getDate();
  let user_age = ty - Uy;
  let user_month = tm - Um;
  let user_day = td - Ud;

  if (Birth_date > today_date) {
    alert("ap sahe date of birth dale apne");
  } else {
    if (tm < Um || (tm == Um && td < Ud)) {
      let correct_user_age = user_age - 1;
      let boorow_date = new Date(ty, tm - 1, 0);
      let btd = boorow_date.getDate();
      let btm = boorow_date.getMonth() + 1;
      let bty = boorow_date.getFullYear();
      let correct_day = user_day + btd;
      let correctb_month = 12 - btm;
      let tag = document.createElement("p");
      tag.innerText = `According to your date of birth, your current age is ${correct_user_age} Years, ${correctb_month} Months, and ${correct_day} Days.`;
      show_age.innerHTML = "";
      show_age.appendChild(tag);
      console.log(
        `me itne sall ${correct_user_age} ur itne  ${correctb_month} mahene ur itne ${correct_day} din ka hon`,
      );
    } else {
      if (td < Ud) {
        let boorow_date = new Date(ty, tm - 1, 0);
        let btd = boorow_date.getDate();
        let btm = boorow_date.getMonth() + 1;
        let bty = boorow_date.getFullYear();
        let correct_day = user_day + btd;
        correct_month = user_month - 1;
        let tag = document.createElement("p");
        tag.innerText = `According to your date of birth, your current age is ${user_age} Years, ${correct_month} Months, and ${correct_day} Days.`;
        show_age.innerHTML = "";
        show_age.appendChild(tag);
        console.log(
          `me itne sall ${user_age} ur itne mahene ${correct_month} ur ${correct_day} ka hon `,
        );
      } else {
        let boorow_date = new Date(ty, tm - 1, 0);
        let btd = boorow_date.getDate();
        let btm = boorow_date.getMonth() + 1;
        let bty = boorow_date.getFullYear();
        console.log("boorow day " + btd + "<br>");
        console.log("boorow month " + btm + "<br>");
        console.log("boorow year " + bty + "<br>");
        let correct_day = user_day + btd;
        let tag = document.createElement("p");
        tag.innerText = `According to your date of birth, your current age is ${user_age} Years, ${user_month} Months, and ${correct_day} Days.`;
        show_age.innerHTML = "";
        show_age.appendChild(tag);
        console.log(
          `me itne sall ${user_age} ur itne mahene ${user_month} ur ${correct_day} ka hon `,
        );
      }
    }
  }
});
