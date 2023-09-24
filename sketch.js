let sharesInput;
let paymentInput;
let calculateButton;
let resultP;
let errorP;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f0f0f0');

  // สร้างช่องข้อมูลและปุ่มพร้อมแต่งรูปแบบ
  sharesInput = createInput('');
  sharesInput.position(windowWidth / 2 - 100, windowHeight / 2 - 60);
  sharesInput.style('padding', '10px');
  sharesInput.style('border-radius', '5px');
  sharesInput.style('border', '1px solid #ccc');

  paymentInput = createInput('');
  paymentInput.position(windowWidth / 2 - 100, windowHeight / 2);
  paymentInput.style('padding', '10px');
  paymentInput.style('border-radius', '5px');
  paymentInput.style('border', '1px solid #ccc');
  
  calculateButton = createButton('คำนวณการชำระเงิน');
  calculateButton.position(windowWidth / 2 - 100, windowHeight / 2 + 60);
  calculateButton.style('padding', '10px');
  calculateButton.style('border-radius', '5px');
  calculateButton.style('border', 'none');
  calculateButton.style('background-color', '#4CAF50');
  calculateButton.style('color', '#fff');
  calculateButton.style('cursor', 'pointer');
  calculateButton.mousePressed(calculatePayment);
  calculateButton.mouseOver(() => calculateButton.style('background-color', '#45a049'));
  calculateButton.mouseOut(() => calculateButton.style('background-color', '#4CAF50'));

  // สร้างย่อหน้าเพื่อแสดงผลลัพธ์และข้อผิดพลาดพร้อมแต่งรูปแบบ
  resultP = createP('ผลลัพธ์: ');
  resultP.position(windowWidth / 2 - 100, windowHeight / 2 + 120);
  resultP.style('font-size', '16px');
  resultP.style('background-color', '#e0ffe0');
  resultP.style('padding', '10px');
  resultP.style('border-radius', '5px');
  
  errorP = createP('');
  errorP.position(windowWidth / 2 - 100, windowHeight / 2 + 160);
  errorP.style('color', 'red');

  // สร้างป้ายชื่อพร้อมแต่งรูปแบบ
  let sharesLabel = createP('จำนวนหุ้น:');
  sharesLabel.position(windowWidth / 2 - 230, windowHeight / 2 - 90);
  sharesLabel.style('font-size', '16px');
  
  let paymentLabel = createP('การชำระเงินต่อหุ้น:');
  paymentLabel.position(windowWidth / 2 - 230, windowHeight / 2 - 20);
  paymentLabel.style('font-size', '16px');
}

function calculatePayment() {
  // รีเซ็ตข้อความข้อผิดพลาด
  errorP.html('');

  // รับค่าจากช่องข้อมูล
  let shares = parseFloat(sharesInput.value());
  let paymentPerShare = parseFloat(paymentInput.value());

  // ตรวจสอบความถูกต้องของข้อมูลและคำนวณการชำระเงินทั้งหมด
  if (isNaN(shares) || isNaN(paymentPerShare)) {
    errorP.html('โปรดป้อนตัวเลขที่ถูกต้อง.');
  } else {
    let totalPayment = shares * paymentPerShare;
    
    // แสดงผลลัพธ์ในสกุลเงิน THB
    resultP.html('ผลลัพธ์: ฿' + totalPayment.toFixed(2));
  }
}
