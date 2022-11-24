DROP DATABASE IF EXISTS upcolor;

CREATE DATABASE IF NOT EXISTS upcolor DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

GRANT ALL ON upcolor.* TO 'staff'@'localhost' IDENTIFIED BY 'password';

USE upcolor;

CREATE TABLE user_types(
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name varchar(255)
);

CREATE TABLE years (
    year_id INT AUTO_INCREMENT PRIMARY KEY,
    year_name VARCHAR(255)
);

CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255)
);

CREATE TABLE qualifications (
    qualification_id INT AUTO_INCREMENT PRIMARY KEY,
    qualification_name VARCHAR(255)
);

CREATE TABLE programs (
    program_id INT AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR (255)
);

CREATE TABLE tools (
    tool_id INT AUTO_INCREMENT PRIMARY KEY,
    tool_name VARCHAR (255)
);

CREATE TABLE languages (
    language_id INT AUTO_INCREMENT PRIMARY KEY,
    language_name VARCHAR (255)
);

CREATE TABLE occupations (
    occupation_id INT AUTO_INCREMENT PRIMARY KEY,
    occupation_name VARCHAR(255) NOT NULL
);

CREATE TABLE prefectures (
    prefecture_id INT AUTO_INCREMENT PRIMARY KEY,
    prefecture_name VARCHAR(255) NOT NULL
);

CREATE TABLE user_profiles (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_mail VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_introduction TEXT,
    user_type_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(user_type_id) REFERENCES user_types(type_id)
);

CREATE TABLE student_profiles(
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    student_course_id INT,
    student_year INT,
    student_programming_languages VARCHAR(255),
    student_tools_and_framework VARCHAR(255),
    student_country_language VARCHAR(255),
    student_qualifications VARCHAR(255),
    student_github VARCHAR(255),
    is_colaborating INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE,
    FOREIGN KEY(student_course_id) REFERENCES courses(course_id) ON DELETE CASCADE
);

CREATE TABLE teacher_profiles(
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    teacher_course_id INT,
    teacher_programming_languages VARCHAR(255),
    teacher_tools_and_framework VARCHAR(255),
    teacher_country_language VARCHAR(255),
    teacher_qualifications VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE,
    FOREIGN KEY(teacher_course_id) REFERENCES courses(course_id) ON DELETE CASCADE
);

CREATE TABLE company_profiles(
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    company_course_id VARCHAR(255),
    company_occupation_id VARCHAR(255),
    company_location_id VARCHAR(255),
    company_introduction TEXT,
    company_business TEXT,
    company_ceo_message TEXT,
    company_address TEXT,
    company_homepage_url VARCHAR(255),
    company_jobsite_url VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE followers(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    follower_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE,
    FOREIGN KEY(follower_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE posts(
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    post_user_id INT,
    post_text VARCHAR(140),
    post_likes INT,
    post_file_url VARCHAR(255),
    parent_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(post_user_id) REFERENCES user_profiles(user_id) ON DELETE cascade
);

CREATE TABLE post_likes(
    post_like_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    like_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY(like_user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE direct_messages(
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sent_user_id INT,
    received_user_id INT,
    sent_text varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(sent_user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE,
    FOREIGN KEY(received_user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE groups_list(
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    created_user_id INT,
    group_name varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(created_user_id) REFERENCES user_profiles(user_id)
);

CREATE TABLE users_joined_group(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    joined_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(group_id) REFERENCES groups_list(group_id) ON DELETE CASCADE,
    FOREIGN KEY(joined_user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE group_chat(
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    sent_user_id INT,
    received_group_id INT,
    sent_text varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(sent_user_id) REFERENCES users_joined_group(joined_user_id) ON DELETE CASCADE,
    FOREIGN KEY(received_group_id) REFERENCES groups_list(group_id) ON DELETE CASCADE
);

CREATE TABLE classes_list(
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    created_user_id INT,
    class_name varchar(255),
    class_password varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(created_user_id) REFERENCES teacher_profiles(user_id)
);

CREATE TABLE users_joined_class(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    class_id INT,
    joined_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(class_id) REFERENCES classes_list(class_id) ON DELETE CASCADE,
    FOREIGN KEY(joined_user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE class_chat(
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    sent_user_id INT,
    received_class_id INT,
    sent_text varchar(511),
    class_file_url varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(sent_user_id) REFERENCES users_joined_class(joined_user_id),
    FOREIGN KEY(received_class_id) REFERENCES classes_list(class_id) ON DELETE CASCADE
);

CREATE TABLE news(
    news_id INT AUTO_INCREMENT PRIMARY KEY,
    news_user_id INT,
    news_title VARCHAR(255),
    news_text VARCHAR(255),
    target_course_id VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(news_user_id) REFERENCES user_profiles(user_id) ON DELETE cascade
);

CREATE TABLE users_joined_company(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    joined_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(company_id) REFERENCES company_profiles(company_id) ON DELETE CASCADE,
    FOREIGN KEY(joined_user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE TABLE company_chat(
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    sent_user_id INT,
    received_company_id INT,
    sent_text varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(sent_user_id) REFERENCES users_joined_company(joined_user_id),
    FOREIGN KEY(received_company_id) REFERENCES company_profiles(company_id)
);

CREATE TABLE team_works_list(
    team_work_id INT AUTO_INCREMENT PRIMARY KEY,
    created_user_id INT,
    team_name varchar(255),
    team_work_name varchar(255),
    team_work_course varchar(255),
    team_work_description varchar(255),
    team_target varchar(255),
    team_concept varchar(255),
    team_strategy varchar(255),
    technology_used varchar(255),
    publish_team_chat INT,
    publish_team_ganttchart INT,
    registered_team_work_on INT,
    active_on BIT DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(created_user_id) REFERENCES user_profiles(user_id)
);

CREATE TABLE users_joined_team_work(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    team_work_id INT,
    joined_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(team_work_id) REFERENCES team_works_list(team_work_id),
    FOREIGN KEY(joined_user_id) REFERENCES user_profiles(user_id)
);

CREATE TABLE team_works_chat(
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    sent_user_id INT,
    received_team_work_id INT,
    sent_text varchar(255),
    work_group_file_url varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(sent_user_id) REFERENCES users_joined_team_work(joined_user_id) ON DELETE CASCADE,
    FOREIGN KEY(received_team_work_id) REFERENCES team_works_list(team_work_id)
);

CREATE TABLE gantt_tasks(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    team_work_id INT NOT NULL,
    task_id BIGINT NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    task_start DATETIME NOT NULL,
    task_end DATETIME NOT NULL,
    task_progress FLOAT NOT NULL,
    parent_task_id BIGINT NOT NULL,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp on update current_timestamp,
    FOREIGN KEY(team_work_id) REFERENCES team_works_list(team_work_id)
);

CREATE TABLE gantt_links(
    link_id INT AUTO_INCREMENT PRIMARY KEY,
    team_work_id INT NOT NULL,
    source BIGINT NOT NULL,
    target BIGINT NOT NULL,
    type INT NOT NULL,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp on update current_timestamp
);

CREATE TABLE images(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    image_url varchar(255),
    image_id INT,
    image_type INT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp
);

CREATE TABLE lectures_list(
    lecture_id INT AUTO_INCREMENT PRIMARY KEY,
    lecture_name varchar(255),
    lecture_room varchar(255),
    lecture_teacher varchar(255),
    lecture_day INT,
    lecture_period INT,
    target_course_id INT,
    target_student_year varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(target_course_id) REFERENCES courses(course_id)
);

CREATE TABLE student_time_table(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    lecture_id INT,
    FOREIGN KEY(student_id) REFERENCES student_profiles(student_id),
    FOREIGN KEY(lecture_id) REFERENCES lectures_list(lecture_id)
);

CREATE TABLE student_attendance(
    student_attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    attendance_date INT,
    attendance_day INT,
    attendance_period INT,
    is_absented INT,
    is_publicdeficiency INT,
    FOREIGN KEY(student_id) REFERENCES student_time_table(student_id)
);

CREATE TABLE lecture_days(
    lecture_days_id INT AUTO_INCREMENT PRIMARY KEY,
    lecture_year INT,
    is_first_half INT,
    number_of_monday INT,
    number_of_tuesday INT,
    number_of_wednesday INT,
    number_of_thursday INT,
    number_of_friday INT
);

CREATE TABLE closed_shool(
    closed_school_id INT AUTO_INCREMENT PRIMARY KEY,
    closed_school_date INT,
    closed_shool_name varchar(255)
);

CREATE TABLE lecture_term(
    lecture_term_id INT AUTO_INCREMENT PRIMARY KEY,
    lecture_term_year INT,
    is_first_half INT,
    start_date INT,
    end_date INT
);

CREATE VIEW user_infomation(
    user_id,
    name,
    mail,
    image
) AS
SELECT
    user_profiles.user_id,
    user_profiles.user_name,
    user_profiles.user_mail,
    images.image_url
FROM
    user_profiles
INNER JOIN
    images ON
    user_profiles.user_id = images.image_id
    AND images.image_type = 1
ORDER BY
    user_profiles.user_id;

CREATE VIEW student_infomation(
    user_id,
    student_id,
    name,
    mail,
    image,
    course_id,
    course_name,
    year_id,
    year_name,
    introduction,
    qualification_ids,
    program_ids,
    tool_ids,
    language_ids,
    github
) AS
SELECT
    student_profiles.user_id,
    student_profiles.student_id,
    user_profiles.user_name,
    user_profiles.user_mail,
    images.image_url,
    student_profiles.student_course_id,
    courses.course_name,
    student_profiles.student_year,
    years.year_name,
    user_profiles.user_introduction,
    student_profiles.student_qualifications,
    student_profiles.student_programming_languages,
    student_profiles.student_tools_and_framework,
    student_profiles.student_country_language,
    student_profiles.student_github
FROM
    student_profiles
    INNER JOIN
        user_profiles
    ON  student_profiles.user_id = user_profiles.user_id
    INNER JOIN
        courses
    ON  student_profiles.student_course_id = courses.course_id
    INNER JOIN
        years
    ON  student_profiles.student_year = years.year_id
    LEFT OUTER JOIN
        images
    ON  student_profiles.user_id = images.image_id
    AND images.image_type = 1
ORDER BY
    student_profiles.student_id;

CREATE VIEW student_registed(
    user_id,
    student_id,
    name,
    mail,
    image,
    course_id,
    course_name,
    year_id,
    year_name,
    introduction,
    qualification_ids,
    program_ids,
    tool_ids,
    language_ids,
    github
) AS
SELECT
    student_profiles.user_id,
    student_profiles.student_id,
    user_profiles.user_name,
    user_profiles.user_mail,
    images.image_url,
    student_profiles.student_course_id,
    courses.course_name,
    student_profiles.student_year,
    years.year_name,
    user_profiles.user_introduction,
    student_profiles.student_qualifications,
    student_profiles.student_programming_languages,
    student_profiles.student_tools_and_framework,
    student_profiles.student_country_language,
    student_profiles.student_github
FROM
    student_profiles
    INNER JOIN
        user_profiles
    ON  student_profiles.user_id = user_profiles.user_id
    INNER JOIN
        courses
    ON  student_profiles.student_course_id = courses.course_id
    INNER JOIN
        years
    ON  student_profiles.student_year = years.year_id
    LEFT OUTER JOIN
        images
    ON  student_profiles.user_id = images.image_id
    AND images.image_type = 1
ORDER BY
    student_profiles.student_id;

CREATE VIEW company_infomation (
    user_id,
    company_id,
    company_name,
    company_image,
    manager_name,
    manager_mail,
    manager_image,
    introduction,
    business,
    ceo_message,
    address,
    course_ids,
    occupation_ids,
    prefecture_ids,
    homepage_url,
    jobsite_url
) AS
SELECT
    company_profiles.user_id,
    company_profiles.company_id,
    company_profiles.company_name,
    company_image.image_url,
    user_profiles.user_name,
    user_profiles.user_mail,
    icon.image_url,
    company_profiles.company_introduction,
    company_profiles.company_business,
    company_profiles.company_ceo_message,
    company_profiles.company_address,
    company_profiles.company_course_id,
    company_profiles.company_occupation_id,
    company_profiles.company_location_id,
    company_profiles.company_homepage_url,
    company_profiles.company_jobsite_url
FROM
    company_profiles
    INNER JOIN
        user_profiles
        ON company_profiles.user_id = user_profiles.user_id
    LEFT OUTER JOIN
        images AS icon
    ON  company_profiles.user_id = icon.image_id
    AND icon.image_type = 1
    LEFT OUTER JOIN
        images AS company_image
    ON  company_profiles.company_id = company_image.image_id
    AND company_image.image_type = 4
ORDER BY
    company_profiles.company_id;

INSERT INTO
    user_types(type_name)
VALUES
    ("STUDENT"),
    ("TEACHER"),
    ("COMPANY"),
    ("ADMIN");

INSERT INTO
    years(year_name)
VALUES
    ("1年"),
    ("2年"),
    ("3年"),
    ("4年");

INSERT INTO
    courses(course_name)
VALUES
    ("本科/システム系"),
    ("本科/ゲームプログラミング系"),
    ("本科/ゲームグラフィック系"),
    ("本科/デザイン系"),
    ("情報処理NW専攻/システムエンジニアコース"),
    ("情報処理NW専攻/IT総合コース/ハードウェアエンジニアクラス"),
    ("情報処理NW専攻/IT総合コース/ITビジネスクラス"),
    ("ゲーム専攻/ゲームプログラムコース"),
    ("ゲーム専攻/ゲームグラフィック・アニメーションコース"),
    ("デザイン・イラスト専攻");

INSERT INTO
    qualifications(qualification_name)
VALUES
    ("MOS/WORD"),
    ("MOS/EXCEL"),
    ("ITパスポート"),
    ("基本情報技術者試験"),
    ("応用情報技術者試験"),
    ("セキュリティマネジメント");

INSERT INTO
    programs(program_name)
VALUES
    ("HTML5/CSS3"),
    ("C言語"),
    ("C++"),
    ("PHP"),
    ("SQL"),
    ("JavaScript"),
    ("C#"),
    ("Java"),
    ("Python"),
    ("Visual Basic(VB, VBA)");

INSERT INTO
    tools(tool_name)
VALUES
    ("Adobe Photoshop"),
    ("Adobe Premiere Pro"),
    ("Adobe illustrator");

INSERT INTO
    languages(language_name)
VALUES
    ("日本語"),
    ("英語"),
    ("ヒンディー語");

INSERT INTO
    occupations(occupation_name)
VALUES
    ("インターネット・WEB"),
    ("通信"),
    ("ソフトウェア"),
    ("ハードウェア・インフラ"),
    ("情報処理サービス");

INSERT INTO
    prefectures(prefecture_name)
VALUES
    ("北海道"),
    ("青森"),
    ("岩手"),
    ("宮城"),
    ("秋田"),
    ("山形"),
    ("福島"),
    ("茨城"),
    ("栃木"),
    ("群馬"),
    ("埼玉"),
    ("千葉"),
    ("東京"),
    ("神奈川"),
    ("新潟"),
    ("富山"),
    ("石川"),
    ("福井"),
    ("山梨"),
    ("長野"),
    ("岐阜"),
    ("静岡"),
    ("愛知"),
    ("三重"),
    ("滋賀"),
    ("京都"),
    ("大阪"),
    ("兵庫"),
    ("奈良"),
    ("和歌山"),
    ("鳥取"),
    ("島根"),
    ("岡山"),
    ("広島"),
    ("山口"),
    ("徳島"),
    ("香川"),
    ("愛媛"),
    ("高知"),
    ("福岡"),
    ("佐賀"),
    ("長崎"),
    ("熊本"),
    ("大分"),
    ("宮崎"),
    ("鹿児島"),
    ("沖縄");
