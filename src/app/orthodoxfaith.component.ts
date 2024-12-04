import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { CommonModule } from "@angular/common"; 

@Component({
  selector: "orthodoxfaith",
  standalone: true,
  imports: [RouterModule, RouterOutlet, CdkAccordionModule, CommonModule], 
  templateUrl: "./orthodoxfaith.component.html",
  styleUrls: ["./orthodoxfaith.component.css"],
})
export class OrthodoxfaithComponent {
  items = [
    {
      title: "1. What is an Orthodox Catechism?",
      body: "An Orthodox Catechism is an instruction in the Orthodox Christian faith, to be taught to every Christian, to enable him to please God and save his own soul.",
      expanded: false, 
    },
    {
      title: "2. What is the meaning of the word Catechism?",
      body: "The word Catechism means oral instruction in the faith of the Church, particularly the Orthodox Church.",
      expanded: false, 
    },
    {
      title: "3. What is necessary in order to please God and save one’s own soul?",
      body: "Faith in God, adherence to His commandments, and the practice of good works are necessary to please God and save one’s own soul.",
      expanded: false, 
    },
    {
        title: "4. Why is faith necessary in the first place?",
        body: "Because, as the Word of God testifies, Without faith it is impossible to please God. Heb. xi. 6.",
        expanded: false, 
    },
    {
        title: "5. Why must a life according to faith, and good works, be inseparable from this faith?",
        body: "Because, as the Word of God testifies, Faith without works is dead James ii. 20.",
        expanded: false,
    },
    {
        title: "6. What is faith?",
        body: "According to the definition of St. Paul, Faith is the substance of things hoped for, the evidence of things not seen (Heb. xi. 1); that is, a trust in the unseen as though it were seen, in that which is hoped and waited for as if it were present.",
        expanded: false,
    },
    {
        title: "7. What is the difference between knowledge and faith?",
        body: "Knowledge has for its object things visible and comprehensible; faith, things which are invisible, and even incomprehensible. Knowledge is founded on experience, on examination of its object; but faith on belief of testimony to truth. Knowledge belongs properly to the intellect, although it may also act on the heart; faith belongs principally to the heart, although it is imparted through the intellect.",
        expanded: false,
    },
    {
        title: "8. Why is faith, and not knowledge only, necessary in religious instruction?",
        body: "Because the chief object of this instruction is God invisible and incomprehensible, and the wisdom of God hidden in a mystery; consequently, many parts of this learning can not be embraced by knowledge, but may be received by faith. Faith, says St. Cyril of Jerusalem, is the eye which enlighteneth every man’s conscience; it giveth man knowledge. For, as the prophet says, If ye will not believe, ye shall not understand. Isa. vii. 9; Cyr. Cat. v.",
        expanded: false,
    },
    {
        title: "9. Can you illustrate further the necessity of faith?",
        body: "St. Cyril thus illustrates it: It is not only amongst us, who hear the name of Christ, that faith is made so great a thing; but every thing which is done in the world, even by men who are unconnected with the Church, is done by faith. Agriculture is founded on faith; for no one who did not believe that he should gather in the increase of the fruits of the earth would undertake the labor of husbandry. Mariners are guided by faith when they intrust their fate to a slight plank, and prefer the agitation of the unstable waters to the more stable element of the earth. They give themselves up to uncertain expectations, and retain for themselves nothing but faith, to which they trust more than to any anchors. Cyr. Cat. v.",
        expanded: false,
    },
    {
        title: "10. Whence is the doctrine of the orthodox faith derived?",
        body: "From divine revelation.",
        expanded: false
    },
    {
        title: "11. What is meant by the words divine revelation?",
        body: "That which God himself has revealed to men, in order that they might rightly and savingly believe in him, and worthily honor him.",
        expanded: false,
    },
    {
        title: "12. Has God given such a revelation to all men?",
        body: "He has given it for all, as being necessary for all alike, and capable of bringing salvation to all; but, since not all men are capable of receiving a revelation immediately from God, he has employed special persons as heralds of his revelation, to deliver it to all who are desirous of receiving it.",
        expanded: false
    },
    {
        title: "13. Why are not all men capable of receiving a revelation immediately from God?",
        body: "Owing to their sinful impurity, and weakness both in soul and body.",
        expanded: false,
    },
    {
        title: "14. Who were the heralds of divine revelation?",
        body: "Adam, Noah, Abraham, Moses, and other Prophets, received and preached the beginnings of divine revelation; but it was the incarnate Son of God, our Lord Jesus Christ, who brought it to earth, in its fullness and perfection, and spread it over all the world by his Disciples and Apostles. ",
        expanded: false
    },
    {
        title: "15. Can not man, then, have any knowledge of God without a special revelation from him?",
        body: "Man may have some knowledge of God by contemplation of those things which he has created; but this knowledge is imperfect and insufficient, and can serve only as a preparation for faith, or as a help towards the knowledge of God from his revelation. For the invisible things of him, from the creation of the world, are clearly seen, being understood by the things that are made, even his eternal power and Godhead. Rom. i. 20. And he hath made of one blood all nations of men, for to dwell on all the face of the earth; and hath determined the times before appointed, and the bounds of their habitation; that they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us. For in him we live, and move, and have our being. Acts xvii. 26-28. With regard to faith in God, it is preceded by the idea that God is, which idea we get from the things which have been created. Attentively examining the creation of the world, we perceive that God is wise, powerful, and good; we perceive, also, his invisible properties. By these means we are led to acknowledge him as the Supreme Ruler. Seeing that God is the Creator of the whole world, and we form a part of the world, it follows that God is also our Creator. On this knowledge follows faith, and on faith adoration. (Basil. Magn. Epist. 232.)",
        expanded: false
    },
    {
        title: "16. How is divine revelation spread among men and preserved in the true Church?",
        body: "By two channels–holy tradition and holy Scripture.",
        expanded: false
    },
    {
        title: "17. What is meant by the name holy tradition?",
        body: "By the name holy tradition is meant the doctrine of the faith, the law of God, the sacraments, and the ritual as handed down by the true believers and worshipers of God by word and example from one to another, and from generation to generation.",
        expanded: false
    },
    {
        title: "18. Is there any sure repository of holy tradition?",
        body: "All true believers united by the holy tradition of the faith, collectively and successively, by the will of God, compose the Church; and she is the sure repository of holy tradition, or, as St. Paul expresses it, The Church of the living God, the pillar and ground of the truth. 1 Tim. iii. 15. St. Irenæus writes thus: We ought not to seek among others the truth, which we may have for asking from the Church; for in her, as in a rich treasure-house, the Apostles have laid up in its fullness all that pertains to the truth, so that whosoever seeketh may receive from her the food of life. She is the door of life. (Adv. Hæres. lib. iii. c. 4.)",
        expanded: false
    },
    {
        title: "19. What is that which you call holy Scripture?",
        body: "Certain books written by the Spirit of God through men sanctified by God, called Prophets and Apostles. These books are commonly termed the Bible.",
        expanded: false
    },
    {
        title: "20. What does the word Bible mean?",
        body: "It is Greek, and means the books. The name signifies that the sacred books deserve attention before all others.",
        expanded: false
    },
    {
        title: "21. Which is the more ancient, holy tradition or holy Scripture?",
        body: "The most ancient and original instrument for spreading divine revelation is holy tradition. From Adam to Moses there were no sacred books. Our Lord Jesus Christ himself delivered his divine doctrine and ordinances to his Disciples by word and example, but not by writing. The same method was followed by the Apostles also at first, when they spread abroad the faith and established the Church of Christ. The necessity of tradition is further evident from this, that books can be available only to a small part of mankind, but tradition to all.",
        expanded: false
    },
    {
        title: "22. Why, then, was holy Scripture given?",
        body: "To this end, that divine revelation might be preserved more exactly and unchangeably. In holy Scripture we read the words of the Prophets and Apostles precisely as if we were living with them and listening to them, although the latest of the sacred books were written a thousand and some hundred years before our time.",
        expanded: false
    },
    {
        title: "23. Must we follow holy tradition, even when we possess holy Scripture?",
        body: "We must follow that tradition which agrees with the divine revelation and with holy Scripture, as is taught us by holy Scripture itself. The Apostle Paul writes: Therefore, brethren, stand fast, and hold the traditions which ye have been taught, whether by word or our epistle. 2 Thess. ii. 15.",
        expanded: false
    },
    {
        title: "24. Why is tradition necessary even now?",
        body: "As a guide to the right understanding of holy Scripture, for the right ministration of the sacraments, and the preservation of sacred rites and ceremonies in the purity of their original institution. St. Basil the Great says of this as follows: Of the doctrines and injunctions kept by the Church, some we have from written instruction. but some we have received from, apostolical tradition, by succession in private. Both the former and the latter have one and the same force for piety, and this will be contradicted by no one who has ever so little knowledge in the ordinances of the Church; for were we to dare to reject unwritten customs, as if they had no great importance, we should insensibly mutilate the Gospel, even in the most essential points, or, rather, for the teaching of the Apostles leave but an empty name. For instance, let us mention before all else the very first and commonest act of Christians, that they who trust in the name of our Lord Jesus Christ should sign themselves with the sign of the cross–who hath taught this by writing? To turn to the east in prayer–what Scripture have we for this? The words of invocation in the change of the Eucharistic bread and of the Cup of blessing–by which of the Saints have they been left us in writing? for we are not content with those words which the Apostle or the Gospel records, but both before them and after them, we pronounce others also, which we hold to be of great force for the sacrament, though we have received them from unwritten teaching. By what Scripture is it, in like manner, that we bless the water of baptism, the oil of unction, and the person himself who is baptized? Is it not by a silent and secret tradition? What more? The very practice itself of anointing with oil–what written word have we for it? Whence is the rule of trine immersion? and the rest of the ceremonies at baptism, the renunciation of Satan and his angels?–from what Scripture are they taken? Are they not all from this unpublished and private teaching, which our Fathers kept under a reserve inaccessible to curiosity and profane disquisition, having been taught as a first principle to guard by silence the sanctity of the mysteries? for how were it fit to publish in writing the doctrine of those things, on which the unbaptized may not so much as look? (Can. xcvii. De Spir. Sanct. c. xxvii.)",
        expanded: false
    },
    {
        title: "25. When were the sacred books written?",
        body: "At different times: some before the birth of Christ, others after.",
        expanded: false
    },
    {
        title: "27. What are the Old and New Testaments?",
        body: "In other words, the old and new Covenants of God with men.",
        expanded: false
    },
    {
        title: "28. In what consisted the Old Testament?",
        body: "In this, that God promised men a divine Saviour, and prepared them to receive him.",
        expanded: false
    },
    {
        title: "29. How did God prepare men to receive the Saviour?",
        body: "Through gradual revelations, by prophecies and types.",
        expanded: false
    },
    {
        title: "30. In what consists the New Testament?",
        body: "In this, that God has actually given men a divine Saviour, his own only-begotten Son, Jesus Christ.",
        expanded: false
    },
    {
        title: "31. How many are the books of the Old Testament?",
        body: "St. Cyril of Jerusalem, St. Athanasius the Great, and St. John Damascene reckon them at twenty-two, agreeing therein with the Jews, who so reckon them in the original Hebrew tongue. (Athanas. Ep. xxxix. De Test.; J. Damasc. Theol. lib. iv. c. 17.)",
        expanded: false
    },
    {
        title: "32. Why should we attend to the reckoning of the Hebrews?",
        body: "Because, as the Apostle Paul says, unto them were committed the oracles of God; and the sacred books of the Old Testament have been received from the Hebrew Church of that Testament by the Christian Church of the New. Rom. iii. 2.",
        expanded: false
    },
    {
        title: "33. How do St. Cyril and St. Athanasius enumerate the books of the Old Testament?",
        body: "As follows: 1, The book of Genesis; 2, Exodus; 3, Leviticus; 4, the book of Numbers; 5, Deuteronomy; 6, the book of Jesus the son of Nun; 7, the book of Judges, and with it, as an appendix, the book of Ruth; 8, the first and second books of Kings, as two parts of one book; 9, the third and fourth books of Kings; 10, the first and second books of Paralipomena; 11, the first book of Esdras, and the second, or, as it is entitled in Greek, the book of Nehemiah; 12, the book of Esther; 13, the book of Job; 14, the Psalms; 15, the Proverbs of Solomon; 16, Ecclesiastes, also by Solomon; 17, the Song of Songs, also by Solomon; 18, the book of the Prophet Isaiah; 19, of Jeremiah; 20, of Ezekiel; 21, of Daniel; 22, of the Twelve Prophets.",
        expanded: false
    },
    {
        title: "34. Why is there no notice taken in this enumeration of the books of the Old Testament of the book of the Wisdom of the son of Sirach, and of certain others?",
        body: "Because they do not exist in the Hebrew.",
        expanded: false
    },
    {
        title: "35. How are we to regard these last-named books?",
        body: "Athanasius the Great says that they have been appointed of the Fathers to be read by proselytes who are preparing for admission into the Church.",
        expanded: false
    },
    {
        title: "36. Is there any division of the books of the Old Testament by which you can give a more distinct account of their contents?",
        body: "They may be divided into the four following classes: Books of the Law, which form the basis of the Old Testament. Historical books, which contain principally the history of religion. Doctrinal, which contain the doctrine of religion. Prophetical, which contain prophecies, or predictions of things future, and especially of Jesus Christ.",
        expanded: false
    },
    {
        title: "37. Which are the books of the Law?",
        body: "The five books written by Moses–Genesis, Exodus, Leviticus, Numbers, and Deuteronomy. Jesus Christ himself gives to these books the general name of the law of Moses. Luke xxiv. 44.",
        expanded: false
    },
    {
        title: "38. What in particular is contained in the book of Genesis?",
        body: "The account of the creation of the world and of man and afterwards the history and ordinances of religion in the first ages of mankind.",
        expanded: false
    },
    {
        title: "39. What is contained in the other four books of Moses?",
        body: "The history of religion in the time of the Prophet Moses, and the Law given through him from God.",
        expanded: false
    },
    {
        title: "41. Which are the doctrinal?",
        body: "The book of Job, the Psalms, and the books of Solomon.",
        expanded: false
    },
    {
        title: "42. What should we remark in particular of the book of Psalms?",
        body: "This book, together with the doctrine of religion, contains also allusions to its history, and many prophecies of our Saviour Christ. It is a perfect manual of prayer and praise, and on this account is in continual use in the divine service of the Church.",
        expanded: false
    },
    {
        title: "43. Which books are prophetical?",
        body: "Those of the Prophets–Isaiah, Jeremiah, Ezekiel, Daniel, and the twelve others.",
        expanded: false
    },
    {
        title: "44. How many are the books of the New Testament?",
        body: "Twenty-seven.",
        expanded: false
    },
    {
        title: "45. Are there among these any which answer to the books of the Law, or form the basis of the New Testament?",
        body: "Yes. The Gospel, which consists of the four books of the Evangelists, Matthew, Mark, Luke, and John.",
        expanded: false
    },
    {
        title: "46. What means the word Gospel?",
        body: "It is the same as the Greek work Evangely, and means good or joyful tidings.",
        expanded: false
    },
    {
        title: "47. Of what have we good tidings in the books called the Gospel?",
        body: "Of the Divinity of our Lord Jesus Christ, of his advent and life on earth, of his miracles and saving doctrine, and, finally, of his death upon the cross, his glorious resurrection, and ascension into heaven.",
        expanded: false
    },
    {
        title: "49. Are any of the books of the New Testament historical?",
        body: "Yes. One: the book of the Acts of the holy Apostles.",
        expanded: false
    },
    {
        title: "60. How do miracles serve for a sign that the word spoken is from God?",
        body: "He who does true miracles works by the power of God; consequently he is in favor with God, and partaker of the divine Spirit; but to such it must belong to speak only the pure truth; and so, when such a man speaks in God’s name, we are sure that by his mouth there speaketh really the Word of God. On this account our Lord Jesus Christ himself owns miracles as a powerful testimony to his divine mission: The works which the Father hath given me to finish, the same works that I do, bear witness of me, that the father hath sent me. John v. 36.",
        expanded: false
    },
    {
        title: "61. Whence may we more particularly see the mighty effect of the doctrine of Christ?",
        body: "From this: that twelve Apostles, taken from among poor and unlearned people, of the lowest class, by this doctrine overcame and subdued to Christ the mighty, the wise, and the rich, kings and their kingdoms. The Composition of the Catechism.",
        expanded: false
    },
    {
        title: "62. What may be a good order for setting forth a catechetical instruction in religion?",
        body: "For this we may follow the book of the Orthodox Confession, approved by the Eastern Patriarchs, and take as our basis the saying of the Apostle Paul, that the whole energies of a Christian, during this present life, consist in these three: faith, hope, charity. And now abideth faith, hope, charity; these three. 1 Cor. xiii. 13. And so the Christian needs: First, Doctrine on faith in God, and on the Sacraments which he reveals; Secondly, Doctrine on hope towards God, and on the means of being grounded in it; Thirdly, Doctrine on love to God, and all that he commands us to love.",
        expanded: false
    },
    {
        title: "63. What does the Church use as her instrument to introduce us to the doctrine of faith?",
        body: "The Creed.",
        expanded: false
    },
    {
        title: "64. What may we take as a guide for the doctrine of hope?",
        body: "Our Lord’s Beatitudes and the Lord’s Prayer.",
        expanded: false
    },
    {
        title: "65. Where may we find the elements of the doctrine of charity?",
        body: "In the Ten Commandments of the Law of God.",
        expanded: false
    }
  ];

  toggleItem(item: any): void {
    item.expanded = !item.expanded; 
  }
}
