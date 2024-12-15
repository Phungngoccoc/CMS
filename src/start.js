import promptSync from 'prompt-sync';
import { exec } from 'child_process';

const prompt = promptSync();

const correctPassword = '@ngoctrai'; // Thay bằng mật khẩu của bạn

// Yêu cầu nhập mật khẩu
const password = prompt('Vui lòng nhập mật khẩu: ', { echo: '*' });

if (password === correctPassword) {
    console.log('Mật khẩu chính xác. Đang khởi động ứng dụng...');
    exec('vite', (error, stdout, stderr) => {
        if (error) {
            console.error(`Lỗi: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Cảnh báo: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
} else {
    console.error('Mật khẩu sai. Dừng chương trình.');
    process.exit(1);
}
