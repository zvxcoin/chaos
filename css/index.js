//首页创建

pd();
indexcoin();

function indexcoin() {
	let a = document.querySelector(`main .colo .welcome .left .title span`);

	a.textContent = topindex[0];
	a = document.querySelector(`main .colo .welcome .left .title1 span`);
	a.textContent = topindex[1];
	a = document.querySelector(`main .colo .welcome .left .title2 span`);
	a.textContent = topindex[2];
	a = document.querySelector(`main .colo .welcome .left .an .an1 h3`);
	a.textContent = topindex[3];
	a = document.querySelector(`main .colo .welcome .left .an .an2 h3`);
	a.textContent = topindex[4];
	a = document.querySelector(`main .vision  h2`);
	a.textContent = main[0];
	a = document.querySelector(`main .vision  h4`);
	a.textContent = main[1];
	a = document.querySelector(`main  .introduce span:nth-of-type(1)`);
	a.textContent = main[2];
	a = document.querySelector(`main  .introduce span:nth-of-type(4)`);
	a.textContent = main[3];
	a = document.querySelector(`main  .introduce span:nth-of-type(2)`);
	a.textContent = main[4];
	a = document.querySelector(`main  .introduce span:nth-of-type(5)`);
	a.textContent = main[5];
	a = document.querySelector(`main  .introduce span:nth-of-type(3)`);
	a.textContent = main[6];
	a = document.querySelector(`main  .introduce span:nth-of-type(6)`);
	a.textContent = main[7];

	if (language === 2) {
		a = document.querySelector(`main .colo .welcome .left .title1 span`);
		a.setAttribute(`style`, `font-size: 35px`);
		a = document.querySelector(`main .colo .welcome .left .title2 span`);
		a.setAttribute(`style`, `font-size: 35px`);
	} else {
		a = document.querySelector(`main .colo .welcome .left .title1 span`);
		a.setAttribute(`style`, ``);
		a = document.querySelector(`main .colo .welcome .left .title2 span`);
		a.setAttribute(`style`, ``);
	}
}

//修改语言

lang.onclick = function () {
	event.stopPropagation();
	let jieguo = event.target;
	language = jieguo.value;
	pd();
	ul1 = document.querySelector(`header .nav .navs`);
	for (let i = 0; i < 5; i++) {
		let cas = ul1.querySelector(`li:nth-of-type(` + (i + 1) + `)`);

		const li = document.createElement(`li`);

		li.className = `list` + [i + 1];
		li.innerHTML = `<a href="` + harl[i] + `">` + navbb[i] + `</a>`;

		ul1.replaceChild(li, cas);
	}

	if (Accounts === "") {
		let connectwallet = document.querySelector(`header .nav .connectwallet`);
		connectwallet.textContent = navbb[5];
	}

	//删除底部
	let foot = document.querySelector(`footer`);
	foot.innerText = ``;
	//    修改底部

	const fdiv = document.createElement(`div`);
	fdiv.innerHTML = `<div class="par">
				<div class="partner">
					<img src="/img/1.png" alt="" />
					<img src="/img/2.png" alt="" />
					<img src="/img/3.png" alt="" />
					<img src="/img/4.png" alt="" />
					<img src="/img/5.png" alt="" />
					<img src="/img/6.png" alt="" />
					<img src="/img/7.png" alt="" />
					<img src="/img/8.png" alt="" />
					<img src="/img/9.png" alt="" />
					<img src="/img/10.png" alt="" />
					<img src="/img/11.png" alt="" />
					<img src="/img/12.png" alt="" />
					<img src="/img/13.png" alt="" />
					<img src="/img/14.png" alt="" />
					<img src="/img/15.png" alt="" />
					<img src="/img/16.png" alt="" />
				</div>
			</div>`;
	foot.insertAdjacentElement(`beforeend`, fdiv);
	const fdiv1 = document.createElement(`div`);
	fdiv1.innerHTML =
		`		<div class="bottm">
				<div class="jumu">
					<img src="/img/logo.png" alt="" />
					<div></div>
					<div class="contactus">
						<span>` +
		footer[1] +
		`</span
						><a href="` +
		footer[2] +
		`"
							><img src="/img/ico_telegram.png" alt=""
						/></a>
						<a href=""><img src="/img/ico_twitter.png" alt="" /></a>
						<a href=""><img src="/img/ico_youtube.png" alt="" /></a>
					</div>
				</div>
			</div>`;
	foot.insertAdjacentElement(`beforeend`, fdiv1);
	//minT页面
	indexcoin();
};

//首页查询

let zvxlist = new Array(); //合约地址
let zvxnamelist = new Array(); //名称
let zvxSupply = new Array(); //发行量

//开始查询
create();
async function create() {
	let provider1 = new ethers.providers.JsonRpcProvider(
		"https://bsc-dataseed.binance.org/"
	);

	//查询代币列表
	let VOTE_ZVXADDR = "0x0057BC45Aa41d2951e406c37259b2BB04f0902a7";
	let contract = new ethers.Contract(VOTE_ZVXADDR, VOTE_ZVXABI, provider1);
	try {
		let tx = await contract.getTokenList();
		// 等待tx落块，并至少3个区块确认:

		let b = tx.length;

		for (let i = 0; i < b; i++) {
			zvxlist[i] = tx[i];
		}

		zvxlist.reverse();
		html1();
	} catch (e) {
		console.log(e, `错误`);
	}
}

async function html1() {
	let provider1 = new ethers.providers.JsonRpcProvider(
		"https://bsc-dataseed.binance.org/"
	);

	//查询代币列表
	let VOTE_ZVXADDR = "0x0057BC45Aa41d2951e406c37259b2BB04f0902a7";

	for (i = 0; i < 10; i++) {
		let contract = new ethers.Contract(zvxlist[i], cha_abi, provider1);
		try {
			zvxnamelist[i] = await contract.symbol();
			zvxSupply[i] = await contract.totalSupply(); // 等待tx落块，并至少3个区块确认:
			zvxSupply[i] = ethers.utils.formatEther(zvxSupply[i]);

			await charu();
		} catch (e) {
			console.log(e, `错误`);
		}
	}
}

function charu() {
	let intext = document.querySelector(`main .coin table tbody`);

	let tr = document.createElement(`tr`);
	tr.innerHTML =
		`					
							<th>` +
		zvxnamelist[i] +
		`</th>
							<th>` +
		zvxSupply[i] +
		`</th><th> Binance Smart Chain
		</th>
							<th>` +
		zvxlist[i] +
		`</th>
							<th>		<div>
									<a href="` +
		`https://bscscan.com/token/` +
		zvxlist[i] +
		`"  target="_blank"><h3>查看</h3></a>
								</div></th>
						`;

	intext.insertAdjacentElement(`beforeend`, tr);
}
