# Sổ Tay Ôn Thi & Thực Hành Toàn Diện: Java Web Services & Spring Boot 3

Tài liệu ôn tập cấp tốc, tóm tắt lý thuyết trọng tâm và hướng dẫn thực hành chi tiết theo chuẩn nhận diện đào tạo môn **Java Web Services & Spring Boot 3** - Học viện Công nghệ Bưu chính Viễn thông (PTIT).

---

## 🌟 Điểm Cải Tiến & Tính Năng Nổi Bật Mới Nhất

1. **Chuẩn Hóa Bộ Bài Tập Thực Hành Chi Tiết Từng Bước (Step-by-Step Runnable Labs)**:
   - Toàn bộ 8 Session đều được trang bị bài Lab thực hành chuyên sâu từ đầu đến cuối:
     - **Cấu hình:** File `build.gradle` / `pom.xml` và `src/main/resources/application.properties`.
     - **Mô hình dữ liệu:** Full code Entities, DTOs, Enums.
     - **Tầng dữ liệu:** Interface `JpaRepository` với Derived Queries và JPQL `@Query`.
     - **Tầng nghiệp vụ & Điều khiển:** Tầng Service và `@RestController` đầy đủ phương thức.
     - **Vận hành:** Lệnh biên dịch, khởi động ứng dụng và dấu hiệu thành công trên Console.
     - **Kiểm thử:** Bảng kịch bản test chi tiết từng request trên Postman (Method, URL, Headers, Raw JSON Body, Expected Status & Response).
     - **Cẩm nang sự cố (Troubleshooting):** Bắt mạch và xử lý triệt để các lỗi kinh điển sinh viên thường gặp (Port in use, 415 Unsupported Media Type, Infinite Recursion, BCrypt Hash, Token Expiration...).

2. **Tinh Gọn Trọng Tâm (Đã Loại Bỏ Phần Trắc Nghiệm)**:
   - Tương tự như tài liệu chuẩn môn DevOps Fundamental, phần câu hỏi trắc nghiệm đã được loại bỏ hoàn toàn để tinh giản nội dung, giúp sinh viên tập trung tối đa 100% thời gian và trí lực vào việc nắm chắc bản chất lý thuyết và thực hành code ra sản phẩm chạy được thật.

3. **Giao Diện Dual-Theme Độ Tương Phản Cực Cao (High-Contrast)**:
   - Chữ đậm nét, rõ ràng 100% trên cả 2 chế độ: **Tối (Cyber Dark)** và **Sáng (Clean Light)**.
   - Chuyển đổi giao diện tức thì với nút bấm icon trên thanh Header và lưu trạng thái vào `localStorage`.

4. **100% Sơ Đồ Kiến Trúc Vector HD (SVG)**:
   - Các sơ đồ luồng kiến trúc được vẽ hoàn toàn bằng chuẩn đồ họa vector **SVG sắc nét**, tự co giãn theo mọi độ phân giải màn hình (Retina, 4K, Mobile):
     - `spring_web_architecture.svg`: Toàn cảnh kiến trúc Spring Boot Web, luồng DispatcherServlet & 3-Tier Layering.
     - `rest_api_layering.svg`: Ma trận chuẩn hóa RESTful Endpoint, HTTP Methods & Phân tầng Annotation.
     - `jpa_entity_lifecycle.svg`: 4 Trạng thái vòng đời Entity, cơ chế Dirty-Checking & Phân cấp JpaRepository.
     - `advanced_query_paging.svg`: Derived Query Methods, JPQL @Query, Phân trang PageRequest & DTO Projection.
     - `validation_databinding.svg`: Luồng WebDataBinder, Jakarta Bean Validation (@NotBlank, @Min) & DataResponse<T>.
     - `exception_file_upload.svg`: Bắt lỗi toàn cục @RestControllerAdvice & Pipeline Upload file Cloudinary CDN.
     - `spring_security_architecture.svg`: Chuỗi bộ lọc SecurityFilterChain, phân biệt AuthN (401) vs AuthZ (403).
     - `jwt_workflow_diagram.svg`: Cấu trúc 3 phần JWT Token, quy trình cấp phát và giải mã Token Stateless.
     - `capstone_enterprise_architecture.svg`: Kiến trúc tích hợp doanh nghiệp All-in-One Mega Capstone.

5. **Tính Năng Tương Tác Học Tập Toàn Diện (Vanilla JS Engine)**:
   - **Thanh Tiến Độ Học Tập Thông Minh (Progress Tracker)**: Tích hợp Checkbox "Đã ôn" tại từng bài học, tự động tính tỷ lệ % hoàn thành và ghi nhớ vào `localStorage`.
   - **Sao Chép Mã Lệnh 1-Click (Copy Code to Clipboard)**: Tích hợp nút sao chép kèm hiệu ứng đổi màu và thông báo Toast nổi.
   - **Công Cụ Tìm Kiếm Thời Gian Thực (Live Search Engine)**: Gõ từ khóa tìm kiếm nhanh trên Header, tự động khoanh vùng viền sáng xanh quanh các bài học và lab liên quan.
   - **Thanh Điều Hướng Nhảy Nhanh (Quick Jump Bar)**: Nhảy trực tiếp tới bất kỳ bài học hoặc bài thực hành nào chỉ với 1 cú click chuột.
   - **File Postman Collection Đi Kèm:** File `Java_Web_Services_Postman_Collection.json` có sẵn để import ngay vào Postman.

---

## 📚 Danh Mục Nội Dung 8 Session Cốt Lõi (41 Bài Học & 9 Lab)

### 🍃 Session 01: Tổng Quan Web & Kiến Trúc Spring (8 Bài + Lab 01)
- **Lesson 01:** Giới thiệu mô hình Web – Client, Server, Database
- **Lesson 02:** HTTP & Web API hoạt động như thế nào? (Request, Response, Status Codes 1xx-5xx)
- **Lesson 03:** Spring Framework là gì? Giới thiệu IoC (Inversion of Control) & DI (Dependency Injection)
- **Lesson 04:** Giới thiệu về Spring Boot và các đặc điểm nổi bật (Auto-config, Embedded Tomcat, Starters)
- **Lesson 05:** Spring Initializr – Tạo dự án Spring Boot, cấu trúc dự án chuẩn
- **Lesson 06:** Cấu trúc mô hình Spring Boot (Front Controller DispatcherServlet, mô hình 3 lớp)
- **Lesson 07:** Giới thiệu công cụ kiểm thử API, cài đặt và cấu hình Postman
- **Lesson 08:** Xây dựng API đầu tiên và kiểm thử bằng Postman
- **🧪 Lab 01 Chuyên Sâu:** Xây dựng dịch vụ Web đầu tiên (Student Greeting API), cấu hình `application.properties`, DTO, Service, Controller, lệnh chạy `./gradlew bootRun` và kiểm thử Postman.

### ⚡ Session 02: RESTful API & Phân Tầng Ứng Dụng (8 Bài + Lab 02)
- **Lesson 01:** RESTful là gì? So sánh REST và SOAP
- **Lesson 02:** Quy tắc đặt tên Endpoint trong REST (Danh từ số nhiều, phân cấp, không dùng động từ)
- **Lesson 03:** HTTP Methods (GET, POST, PUT, DELETE, PATCH) và Status Codes thông dụng
- **Lesson 04:** Phân tầng ứng dụng và các chú thích cơ bản: @Controller, @RestController, @Service, @Repository, @Component
- **Lesson 05:** Phân biệt @RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
- **Lesson 06:** Giới thiệu @RequestParam vs @PathVariable
- **Lesson 07:** Giới thiệu @RequestBody vs @ModelAttribute
- **Lesson 08:** Xây dựng các API CRUD cơ bản chuẩn REST
- **🧪 Lab 02 Chuyên Sâu:** Xây dựng hệ thống RESTful API CRUD Danh mục sản phẩm (Category Service) lưu trữ in-memory an toàn đa luồng, chuẩn hóa 5 Endpoint với mã 200, 201, 204, 404.

### 🏛️ Session 04: ORM Và Spring Data JPA (6 Bài + Lab 04)
- **Lesson 01:** ORM là gì? Giới thiệu JPA và Hibernate, cài đặt và cấu hình kết nối MySQL
- **Lesson 02:** Vòng đời của Entity (Transient, Managed, Detached, Removed) và các chú thích: @Entity, @Id, @GeneratedValue, @Column
- **Lesson 03:** Entity Relationship: @OneToOne, @OneToMany, @ManyToOne và @ManyToMany (mappedBy, Cascade, FetchType)
- **Lesson 04:** Giới thiệu về Spring Data JPA, sơ đồ phân cấp các Interface
- **Lesson 05:** Interface JpaRepository & các phương thức CRUD mặc định
- **Lesson 06:** Tích hợp xây dựng các API cơ bản kết nối cơ sở dữ liệu
- **🧪 Lab 04 Chuyên Sâu:** Thiết kế 2 Entity quan hệ 1-N (Category - Product) lưu trữ cơ sở dữ liệu MySQL 8.0, cấu hình khóa ngoại `@JoinColumn`, `JpaRepository`, và kiểm tra DDL tự sinh.

### 📊 Session 05: Truy Vấn Dữ Liệu Nâng Cao (5 Bài + Lab 05)
- **Lesson 01:** Truy vấn dữ liệu với phương thức tuỳ chỉnh (Derived Query Methods)
- **Lesson 02:** Paging và Sorting: PageRequest, Sort, đối tượng Page<T>
- **Lesson 03:** Truy vấn với @Query, JPQL vs Native SQL, @Modifying & @Transactional
- **Lesson 04:** DTO projection – trả dữ liệu theo định dạng mong muốn
- **Lesson 05:** Tạo API lọc/sắp xếp danh sách kết hợp phân trang
- **🧪 Lab 05 Chuyên Sâu:** Xây dựng API tìm kiếm phân trang và sắp xếp động theo nhiều tiêu chí (tên, khoảng giá, danh mục) với câu lệnh JPQL `@Query` và DTO phản hồi `PaginationResponse`.

### 🛡️ Session 07: Data Binding, Validation (5 Bài + Lab 07)
- **Lesson 01:** Giới thiệu cơ chế DataBinding trong Spring (WebDataBinder)
- **Lesson 02:** Binding dữ liệu với @RequestBody, @ModelAttribute
- **Lesson 03:** Validation với Jakarta Bean Validation: @Valid, @NotNull, @NotBlank, @NotEmpty, @Size, @Min, @Email
- **Lesson 04:** Custom message lỗi và tạo response chuẩn hóa (`DataResponse<T>`: status, message, data)
- **Lesson 05:** Tích hợp validation vào API Controller & bắt ngoại lệ MethodArgumentNotValidException
- **🧪 Lab 07 Chuyên Sâu:** Tích hợp Jakarta Bean Validation, xây dựng generic wrapper `DataResponse<T>`, gắn ràng buộc DTO nhập liệu và kiểm thử bắt lỗi tự động với Postman.

### 🚨 Session 08: Exception Handling & File Upload (5 Bài + Lab 08)
- **Lesson 01:** Tạo Global Exception Handler với (@RestControllerAdvice)
- **Lesson 02:** Phân loại exception và xử lý theo lỗi với @ExceptionHandler
- **Lesson 03:** Upload file với MultipartFile trong Spring Boot
- **Lesson 04:** Validate kích thước (max-file-size) & định dạng file an toàn
- **Lesson 05:** Tích hợp: gửi file kèm API và tải lên dịch vụ Cloudinary CDN
- **🧪 Lab 08 Chuyên Sâu:** Hoàn thiện bộ bắt ngoại lệ toàn cục `@RestControllerAdvice` (404, 400, 500) và tải file ảnh `MultipartFile` lên dịch vụ đám mây Cloudinary CDN.

### 🔒 Session 10: Spring Security Cơ Bản (5 Bài + Lab 10)
- **Lesson 01:** Tổng quan Spring Security trong ứng dụng doanh nghiệp
- **Lesson 02:** Các thành phần chính: FilterChain, UserDetails, UserDetailsService, SecurityContextHolder
- **Lesson 03:** Phân biệt rõ Authentication (401 Unauthorized) vs Authorization (403 Forbidden)
- **Lesson 04:** Cấu hình bảo mật với HttpSecurity trong Spring Boot 3 (Stateless, CSRF disable, RequestMatchers)
- **Lesson 05:** Tạo API xác thực cơ bản (Đăng ký mã hóa mật khẩu một chiều BCrypt)
- **🧪 Lab 10 Chuyên Sâu:** Xây dựng cấu hình `SecurityFilterChain` Spring Boot 3, mã hóa mật khẩu một chiều BCrypt, tạo API đăng ký người dùng và phân quyền Endpoint Role-based.

### 🔐 Session 11: Mã Hóa Token Với JWT (4 Bài + Lab 11)
- **Lesson 01:** Tổng quan về JWT (JSON Web Token), cấu trúc 3 phần Header.Payload.Signature
- **Lesson 02:** Tạo phương thức mã hóa thông tin người dùng với JWT (JWTProvider: sinh, giải mã, validate)
- **Lesson 03:** Viết filter kiểm tra và giải mã token từ Header (JWTFilterChain extends OncePerRequestFilter)
- **Lesson 04:** Cấu hình Spring Security để áp dụng JWT và xử lý ngoại lệ JWTEntryPoint
- **🧪 Lab 11 Chuyên Sâu:** Bảo mật phi trạng thái (Stateless) toàn diện với JWT Token, cấu hình `JWTProvider`, `JWTFilterChain`, `SecurityConfig` và kịch bản test 5 bước hoàn chỉnh trên Postman.

### 🏆 Mega Capstone Project: Enterprise Product & Auth REST Services (All-in-One)
- Kiến trúc tích hợp doanh nghiệp hoàn chỉnh kết nối toàn bộ 8 Session từ Session 01 đến Session 11.
- Kịch bản kiểm thử 8 bước chuẩn doanh nghiệp trên Postman.

---

## 🚀 Hướng Dẫn Sử Dụng
1. Nhấp đúp chuột vào file [`index.html`](file:///d:/Tsubasa/Java_Web_Services/De_Cuong_On_Tap/index.html) để mở trực tiếp trên trình duyệt web (Google Chrome, Microsoft Edge, Firefox, Cốc Cốc, Safari...).
2. Bấm vào các Tab môn học trên thanh điều hướng để xem lý thuyết và thực hành từng Session.
3. Tích chọn vào ô **"Đã ôn"** để hệ thống tự động ghi nhận và cập nhật thanh tiến độ học tập.
4. Nhấn nút ☀️ / 🌙 ở góc trên bên phải để chuyển đổi giữa giao diện Sáng và Tối.
5. Sử dụng file [`Java_Web_Services_Postman_Collection.json`](file:///d:/Tsubasa/Java_Web_Services/De_Cuong_On_Tap/Java_Web_Services_Postman_Collection.json) để import thẳng vào Postman và thực hiện kiểm thử theo hướng dẫn từng bài Lab.
