// 상세 보기
function viewPaperDetail(paperId) {
    document.querySelectorAll('.paper-detail').forEach(detail => detail.classList.add('hidden'));
    document.getElementById(paperId).classList.remove('hidden');
}

// 상세 닫기
function closePaperDetail() {
    document.querySelectorAll('.paper-detail').forEach(detail => detail.classList.add('hidden'));
}
