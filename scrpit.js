
function calculateFees() {
    const clientName = document.getElementById('clientName').value;
    const clientId = document.getElementById('clientId').value;
    const caseNumber = document.getElementById('caseNumber').value;
    const caseType = document.getElementById('caseType').value;
    const sessions = parseInt(document.getElementById('sessions').value) || 0;
    const sessionPrice = parseFloat(document.getElementById('sessionPrice').value) || 0;
    const consultations = parseInt(document.getElementById('consultations').value) || 0;
    const consultationPrice = parseFloat(document.getElementById('consultationPrice').value) || 0;
    const paymentInfoElement = document.getElementById('p1').innerHTML; // استخدام innerHTML بدلاً من value
    const totalFees = (sessions * sessionPrice) + (consultations * consultationPrice);

    const feesTableBody = document.getElementById('feesTableBody');
    feesTableBody.innerHTML = '';

    appendTableRow(feesTableBody, 'اسم العميل', clientName);
    appendTableRow(feesTableBody, 'رقم العميل', clientId);
    appendTableRow(feesTableBody, 'رقم القضية', caseNumber);
    appendTableRow(feesTableBody, 'نوع القضية', caseType);
    appendTableRow(feesTableBody, 'عدد الجلسات', sessions);
    appendTableRow(feesTableBody, 'سعر الجلسة الواحدة', sessionPrice);
    appendTableRow(feesTableBody, 'عدد الإستشارات', consultations);
    appendTableRow(feesTableBody, 'سعر الإستشارة الواحدة', consultationPrice);
    appendTableRow(feesTableBody, 'اجمالي الاتعاب', totalFees);
    appendTableRow(feesTableBody, 'طريقة الدفع', paymentInfoElement);

    // إظهار حقلي الدفع بعد حساب الرسوم
    document.getElementById('feesTable').style.display = 'table';
}

function appendTableRow(tableBody, info, value) {
    const row = document.createElement('tr');
    const infoCell = document.createElement('td');
    const valueCell = document.createElement('td');
    
    infoCell.innerHTML = `<b>${info}</b>`; // إضافة عنوان قوي (بولد) للمعلومات
    valueCell.innerHTML = value;
    
    row.appendChild(valueCell);
    row.appendChild(infoCell); // تبديل ترتيب الخلايا هنا
    tableBody.appendChild(row);
}

function generatePDF() {
    const element = document.getElementById('feesTableBody');
    html2pdf(element, {
        margin: 10,
        filename: 'فاتورة اتعاب القضية .pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
