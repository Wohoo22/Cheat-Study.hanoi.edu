# Cheat-Study.edu
Code cheat tất cả đề trên study.edu siêu đơn giản, ngắn gọn from Quân Đặng lớp 12 with luv <3

# UPDATE:
* Đã fix lỗi đề GDCD, bây giờ môn GDCD dùng cách làm ở mục /#1/ (giống môn Toán lớp 12).
* Website của sở giáo dục mới update, tin vui là code tất cả các môn lớp 12 vẫn dùng ngon, tin buồn là đề lớp 11 và đề ôn tập chương toán 12 k còn dùng đc nữa và mình cũng lười k muốn update lại đề lớp 11 đâu, chỉ update lại đề ôn tập chương toán lớp 12 thôi (vì mình lớp 12), các bạn lớp 11 và các khối khác dùng code ở cách 2 là đc.
* Update thêm code dùng chung cho TẤT CẢ CÁC ĐỀ, lớp nào cũng dùng được, môn nào cũng được ở mục Cách 2, tuy nhiên ở cách này thì các bạn phải lấy 1 điểm 0 vào lần thì đầu tiên và đến lần thi thứ 2 mới đc 10 điểm. Còn nếu k muốn 0 điểm lần đầu thì làm cách 2.2.
* Ở phần cách 1, có 1 số đề Sinh, Hóa có những câu có nội dung đáp án trùng nhau nên code ở cách 1 sẽ không chọn đúng 1 vài câu, mình đã fix lỗi này ở code của cách 2 và 2.2, nên những bạn nào muốn đc 10 hóa sinh thì nên làm theo cách 2 hoặc 2.2.

# HƯỚNG DẪN:
* Trước tiên các bạn phải bắt buộc cài add-on này vào Chrome hoặc Cốc Cốc:
 https://chrome.google.com/webstore/detail/localstorage-manager/fkhoimdhngkiicbjobkinobjkoefhkap
* Chú ý: Với các môn khác môn toán lớp 12 thì dùng cách ở mục /#0/, đề toán lớp 12 thì dùng cách ở mục /#1/ ở Cách 1. Code dùng cho mọi đề thì dùng Cách 2.
* Lưu ý: folder "Mã đề toán" chỉ chứa đề toán của lớp 12.

## CÁCH 1(được 10 ngay lần làm đầu tiên):
* Ở phần cách 1, có 1 số đề Sinh, Hóa có những câu có nội dung đáp án trùng nhau nên code ở cách 1 sẽ không chọn đúng 1 vài câu, mình đã fix lỗi này ở code của cách 2 và 2.2, nên những bạn nào muốn đc 10 hóa sinh thì nên làm theo cách 2 hoặc 2.2.
* Với những bạn cần điểm cao, điểm 10 thì nên dùng cách 2 và 2.2 vì mình đã tối ưu code để đảm bảo độ chính xác đáp án của tất cả các đề, còn với những bạn chỉ cần làm cho có, lấy điểm khá (từ 8-10) thì dùng cách 1 là ok, vì cách 1 là code bản đầu tiên của mình nên vẫn còn 1 số lỗi nho nhỏ (với 1 số đề) nên điểm sẽ dao động từ 8-10( trừ Toán với GDCD thì sẽ đc 10 tuyệt đối).

## /#0/ Làm những môn trừ môn Toán và GDCD lớp 12:

*Bước 1: Vào đề cần làm, ấn “Vào thi” ( chưa ấn “Bắt đầu làm bài” vội nhé). Tìm đề bạn đang làm trong file "Mã đề các môn (trừ Toán)" rồi copy code bên trong.
   
*Bước 2: Chuyển sang tab đang làm bài, mở add-on LocalStorage đã cài ở góc trên bên phải, ấn nút “Add” -> cửa sổ nhập code đầu tiên sẽ hiện lên “Key:” -> Nhập vào: “ans” rồi ấn OK -> cửa sổ nhập code “Value:” hiện ra -> Nhập code ở bước 1 và ấn OK.
   
*Bước 3: Ấn “Bắt đầu làm bài” để vào làm bài thi, F12 -> Console -> sau đó nhập code trong file pickRightAnswer.js rồi Enter.

* Code này sẽ cho bạn điểm 10 tuyệt đối.

 
## /#1/ Đề toán lớp 12 các đề Ôn THPT (folder Mã đề toán) và GDCD lớp 12:

*Bước 1: Vào đề thi cần làm, chọn Vào thi, xem mã đề của bạn là gì rồi tìm trong folder "Mã đề toán", mở file mã đề lên rồi copy code bên trong.

*Bước 2: Mở add-on LocalStorageManager, chọn "Add", trước tiên ở cửa sổ nhập Key các bạn nhập giá trị "ans" rồi ấn OK. Sau đó đến cửa sổ nhập Value các bạn copy code ở bước 1 vào rồi ấn OK.

*Bước 3: Ở trang làm bài thi, các bạn ấn F12 -> Console rồi nhập code trong file pickRightAnswer2.js vào rồi ấn Enter, lúc này code sẽ tự điền hết đáp án đúng cho bạn.
 
* Chú ý: Code 2 môn này sẽ cho bạn điểm 10, nếu bạn muốn điểm thấp hơn thì sau khi code đã nhập đáp án đúng cho bạn, bạn có thể chọn lại đáp án sai bao nhiêu câu mà bạn muốn để điểm thấp hơn :)) .


## CÁCH 2(dùng cho tất cả các đề các môn)(đảm bảo 10 điểm):
* Lưu ý, nếu làm Toán hoặc Lý, ở bước 1, trước khi nộp bài, chuột phải vào 1 kí hiệu toán học bất kì ở chỗ đáp án -> Math Setting -> Math renderer -> chọn Plain Source. 
 
*Bước 1: Vào đề thi cần làm, vào thi, KHÔNG CHỌN ĐÁP ÁN CÂU NÀO CẢ, nộp bài.

*Bước 2: Mở "Chi tiết bài làm", F12->Console, copy code trong file getAnsQues.js rồi Enter.

*Bước 3: Ấn "Quay lại kì thi", vào thi, bắt đầu làm bài, F12->Console, copy code trong file pickRightAnswer3.js rồi Enter. Lúc này các đáp án đúng đã đc chọn.


## CÁCH 2.2(cho mấy bạn có nick khác và k muốn bị điểm 0 lần đầu)(dùng cho tất cả các đề các môn)(đảm bảo 10 điểm):
* Lưu ý, nếu làm Toán hoặc Lý, ở bước 1, trước khi nộp bài, chuột phải vào 1 kí hiệu toán học bất kì ở chỗ đáp án -> Math Setting -> Math renderer -> chọn Plain Source. 

*Bước 1: Đăng nhập nick khác, vào đề thi cần làm, KHÔNG CHỌN ĐÁP ÁN CÂU NÀO CẢ, nộp bài, vào "Chi tiết bài làm", F12->Console, nhập code trong file getAnsQues.js rồi ENTER.

*Bước 2: Làm xong bước 1 thì đăng xuất luôn xong đăng nhập vào nick mình, vào đề thi cần làm, vào thi, F12->Console, nhập code trong file pickRightAnswer3,js rồi ENTER.

