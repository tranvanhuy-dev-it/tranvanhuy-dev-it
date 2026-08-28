# GitHub Profile Setup

Các SVG trong repository ban đầu là placeholder an toàn. GitHub Actions sẽ tự ghi đè chúng bằng dữ liệu thật sau khi cấu hình xong.

## 1. Tạo profile repository

Repository phải là `tranvanhuy-dev-it/tranvanhuy-dev-it`, ở chế độ public. Chép toàn bộ file trong thư mục này vào root của repository đó.

## 2. Cho phép workflow ghi file

Vào **Settings → Actions → General → Workflow permissions**, chọn **Read and write permissions**, rồi lưu thay đổi.

## 3. Thêm secrets

Vào **Settings → Secrets and variables → Actions → New repository secret**:

- `METRICS_TOKEN`: GitHub Personal Access Token có quyền đọc profile/repository. Với classic token, chọn tối thiểu `public_repo`; thêm `repo` nếu muốn thống kê private repositories.
- `WAKATIME_API_KEY`: API key lấy từ phần Settings của tài khoản WakaTime.

Không đưa token hoặc API key trực tiếp vào workflow hay commit lên GitHub.

## 4. Chạy lần đầu

Mở tab **Actions** và chạy thủ công theo thứ tự:

1. **Advanced GitHub Metrics**
2. **Generate Contribution Snake**
3. **Update WakaTime Stats**

Sau khi các workflow hoàn tất, kiểm tra những file SVG đã được cập nhật và phần Weekly Coding Stats trong `README.md` đã có dữ liệu 7 ngày gần nhất.

## Lịch tự động

Ba workflow chạy hằng ngày theo UTC. Múi giờ hiển thị của Metrics là `Asia/Ho_Chi_Minh`.
