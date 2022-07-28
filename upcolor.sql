DROP DATABASE IF EXISTS upcolor;

CREATE DATABASE IF NOT EXISTS upcolor DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

GRANT ALL ON upcolor.* TO 'staff'@'localhost' IDENTIFIED BY 'password';

USE upcolor;

CREATE TABLE user_types(
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name varchar(255)
);

CREATE TABLE courses(
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255)
);

CREATE TABLE user_profiles (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_mail VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_picture_url VARCHAR(255),
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
    user_id INT,
    company_name VARCHAR(255),
    company_url VARCHAR(255),
    company_industry VARCHAR(255),
    company_occupation VARCHAR(255),
    company_location VARCHAR(255),
    company_introduction TEXT,
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
    sent_text varchar(255),
    class_file_url varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(sent_user_id) REFERENCES users_joined_class(joined_user_id),
    FOREIGN KEY(received_class_id) REFERENCES classes_list(class_id) ON DELETE CASCADE
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
    image_id INT,
    image_url varchar(255),
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

INSERT INTO
    user_types(type_name)
VALUES
    ('生徒'),
    ('講師'),
    ('企業');

INSERT INTO
    courses(course_name)
VALUES
    ('本科/システム系'),
    ('本科/ゲームプログラミング系'),
    ('本科/ゲームグラフィック系'),
    ('本科/デザイン系'),
    ('情報処理NW専攻/システムエンジニアコース'),
    ('情報処理NW専攻/IT総合コース/ハードウェアエンジニアクラス'),
    ('情報処理NW専攻/IT総合コース/ITビジネスクラス'),
    ('ゲーム専攻/ゲームプログラムコース'),
    ('ゲーム専攻/ゲームグラフィック・アニメーションコース'),
    ('デザイン・イラスト専攻');