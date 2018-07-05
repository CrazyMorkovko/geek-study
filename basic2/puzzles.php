<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Загадки</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div id="headerWrap">
    <div id="header">
        <ul class="menu">
            <li><a href="myPage.html">Главная</a></li>
            <li><a href="puzzles.php">Загадки</a></li>
            <li><a href="guessTheNumberOne.html">Угадайка</a></li>
            <li><a href="guessTheNumberTwo.html">Угадайка мультиплеер</a></li>
            <li><a href="bank.html">Расчет банковского вклада на 5 лет</a></li>
            <li><a href="currencyConverter.html">Конвертер валют</a></li>
            <li><a href="equation.html">Уравнение</a></li>
            <li><a href="logicalTasks.html">Логические задачи</a></li>
        </ul>
    </div>
    </div>
    <div id="contentWrap">
    <div id="content">
    <div id="center">
        <h1>Игра в загадки</h1>
        <div id="box">
            <form action="" method="get">
                <label for="firstQuestions">
                    Летом серый, а зимой белый
                </label>
                <br>
                <input type="text" name="question1" id="firstQuestions">
                <br>

                <label for="secondQuestions">
                    Хвост крючком, нос пятачком
                </label>
                <br>
                <input type="text" name="question2" id="secondQuestions">
                <br>

                <label for="thirdQuestions">
                    На шесте — дворец, во дворце — певец.
                </label>
                <br>
                <input type="text" name="question3" id="thirdQuestions">
                <br>

                <label for="forthQuestions">
                    Пять братьев — Годами равные, ростом разные.
                </label>
                <br>
                <input type="text" name="question4" id="forthQuestions">
                <br>

                <input type="submit" value="Ответить">
            </form>

            <?php
            if (!empty($_GET['question1']) && !empty($_GET['question2'])) {
                $quest1 = $_GET['question1'];
                $score = 0;

                if ($quest1 == 'заяц') {
                    echo '1 - Правильно';
                    $score++;
                }
                else {
                    echo '1 - Неправильно';
                }

                echo '<br>';

                $quest2 = $_GET['question2'];
                if ($quest2 == 'свинья' || $quest2 == 'поросенок' || $quest2 == 'поросёнок') {
                    echo '2 - Правильно';
                    $score++;
                }
                else {
                    echo '2 - Неправильно';
                }

                echo '<br>';

                $quest3 = $_GET['question3'];
                if ($quest3 == 'скворец') {
                    echo '3 - Правильно';
                    $score++;
                }
                else {
                    echo '3 - Неправильно';
                }

                echo '<br>';

                $quest4 = $_GET['question4'];
                if ($quest4 == 'пальцы') {
                    echo '4 - Правильно';
                    $score++;
                }
                else {
                    echo '4 - Неправильно';
                }

                echo '<br><br>';

                echo 'Вы угадали ' . $score . ' загадок';
            }
?>
        </div>
    </div>
    </div>
    </div>
    <div id="footer">
        <p>&copy; &quot;Все права защищены&quot;</p>
    </div>
    </body>
</html>