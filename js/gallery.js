const gallery = document.querySelector('#gallery');

// Hàm lấy giá trị CSS
const getVal = (elem, style) => parseInt(window.getComputedStyle(elem).getPropertyValue(style));

// Hàm lấy chiều cao của phần tử
const getHeight = (item) => item.querySelector('.content').getBoundingClientRect().height;

// Hàm điều chỉnh kích thước cho tất cả phần tử trong gallery
const resizeAll = () => {
    const altura = getVal(gallery, 'grid-auto-rows');
    const gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(item => {
        item.style.gridRowEnd = `span ${Math.ceil((getHeight(item) + gap) / (altura + gap))}`;
    });
};

// Hàm xử lý sự kiện khi ảnh được tải
const handleImageLoad = (item) => {
    const altura = getVal(gallery, 'grid-auto-rows');
    const gap = getVal(gallery, 'grid-row-gap');
    const gitem = item.parentElement.parentElement;
    gitem.style.gridRowEnd = `span ${Math.ceil((getHeight(gitem) + gap) / (altura + gap))}`;
};

// Thêm sự kiện load cho tất cả ảnh trong gallery
gallery.querySelectorAll('img').forEach(item => {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
        handleImageLoad(item);
        item.classList.remove('byebye');
    } else {
        item.addEventListener('load', () => {
            handleImageLoad(item);
            item.classList.remove('byebye');
        });
    }
});

// Thêm sự kiện resize cho cửa sổ
window.addEventListener('resize', resizeAll);

// Gán sự kiện click cho từng phần tử gallery-item
gallery.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('full');
        console.log('Clicked on item:', item); // Thông báo để kiểm tra
    });
});

// Gán sự kiện click cho từng ảnh để kích hoạt toggle class 'full'
gallery.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện click từ việc truyền lên cha
        const galleryItem = item.closest('.gallery-item'); // Lấy phần tử gallery-item cha
        galleryItem.classList.toggle('full');
        console.log('Clicked on image:', item.src); // Thông báo để kiểm tra
    });
});
