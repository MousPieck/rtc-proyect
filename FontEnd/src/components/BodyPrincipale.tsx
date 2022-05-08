import { CardsPrincipale } from "./Cards/CardsPrincipale";

export const BodyPrincipale = () => {
	return (
		<div className="main_Body">
			<div className="body__1">
				<CardsPrincipale
					immagine={
						"https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2014/02/ricetta-crostata-marmellata/crostata-marmellata-apertura.jpg"
					}
					titolo={"Crostata alla marmellata"}
					subTitolo={"INGREDIENTI"}
					contenuto={
						<ul>
							<li>300 g di farina 00</li>
							<li>150 g di zucchero semolato</li>
							<li>100 g di burro freddo</li>
							<li>1 uovo</li>
							<li>1 tuorlo</li>
							<li>1 cucchiaino di lievito per dolci</li>
							<li>½ bacca di vaniglia</li>
							<li>1 pizzico di sale</li>
							<li>1 vasetto di confettura di fragole</li>
						</ul>
					}
					className={"cardcolor"}
				/>
				<div className="body_cointainer_1">
					<h2>Crostata Alla Marmellata</h2>
					<p>
						La crostata alla marmellata è un dolce che piace a
						tutti, in ogni occasione. Dalla colazione del mattino
						fino al dessert, una fetta di crostata di pasta frolla,
						ricca e friabile, è sempre gradita. Questa è quindi una
						ricetta classica, di quelle da conservare.
					</p>

					<p>
						Un classico tra i classici: la crostata alla marmellata
						è il dolce ideale in qualunque momento della giornata
						perché è ottima a colazione, per la merenda, con un tè e
						anche come dessert, magari con una pallina di gelato
						alla crema.{" "}
					</p>
				</div>
			</div>
			<div className="body__2 flex-row-reverse">
				<CardsPrincipale
					immagine={
						"https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2022/04/capretto-al-forno/_MG_2525-2.jpg"
					}
					titolo={"Capretto Al Forno"}
					subTitolo={"INGREDIENTI"}
					contenuto={
						<ul>
							<li>
								1 kg di carne di capretto (meglio se già
								porzionata)
							</li>
							<li>750 g di vino bianco</li>
							<li>1 cipolla bianca o dorata</li>
							<li>2 carote</li>
							<li>2 coste di sedano</li>
							<li>qualche rametto di rosmarino</li>
							<li>50 g di olio extravergine di oliva</li>
							<li>qualche foglia di alloro</li>
							<li>qualche bacca di ginepro</li>
						</ul>
					}
					className={""}
				/>
				<div className="body_cointainer_2">
					<h2>Capretto Al Forno</h2>
					<p>
						Il capretto al forno è un secondo piatto di carne che si
						porta in tavola soprattutto durante il pranzo di Pasqua.
						Lo abbiamo preparato con le patate, per una ricetta tra
						le più classiche e semplici.{" "}
					</p>
					<p>
						Il capretto al forno può essere annoverato come una
						delle preparazioni più tipiche della Pasqua, insieme
						all'agnello. La ricetta che vi presentiamo è tra le più
						classiche e semplici da realizzare, con il capretto
						porzionato (consigliamo di farlo fare al vostro
						macellaio) e infornato insieme alle patate, così da
						portare in tavola un gustoso secondo con contorno
						abbinato, proprio come lo è l'agnello al forno con
						patate.{" "}
					</p>
				</div>
			</div>
			<div className="body__1">
				<CardsPrincipale
					immagine={
						"https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2022/03/platessa-al-forno/_MG_1002_orizz.jpg"
					}
					titolo={"Platessa Al Forno"}
					subTitolo={"INGREDIENTI"}
					contenuto={
						<ul>
							<li>400-500 g di platessa (4 filetti minimo)</li>
							<li>1 limone</li>
							<li>4-5 patate medie</li>
							<li>1 mazzetto di timo</li>
							<li>1 mazzetto di rosmarino</li>
							<li>1 mazzetto di prezzemo</li>
							<li>olio extravergine di oliva</li>
							<li>sale</li>
							<li>pepe</li>
						</ul>
					}
					className={"cardcolor"}
				/>
				<div className="body_cointainer_1">
					<h2>Platessa Al Forno</h2>
					<p>
						La platessa al forno conquista con la delicatezza delle
						sue carni bianche che in questa facile ricetta si
						apprezzano ancora di più per la semplicità del
						condimento. Una bella idea per un secondo gustoso e
						leggero!
					</p>
					<p>
						La platessa al forno è una ricetta semplice e veloce per
						portare in tavola un secondo gustoso e leggero che
						convincerà anche chi è alla ricerca di piatti saporiti.
						La platessa è molto apprezzata per la delicatezza delle
						sue carni bianche che in questa ricetta viene esaltata
						da un sempice condimento: olio extravergine, erbe
						romatiche, sale e pepe.
					</p>
				</div>
			</div>
			<div className="body__2 flex-row-reverse">
				<CardsPrincipale
					immagine={
						"https://www.cucchiaio.it/content/cucchiaio/it/ricette/2013/10/ricetta-polenta-baccala/_jcr_content/header-par/image_single.img.jpg/1638389065428.jpg"
					}
					titolo={"Polenta e baccalà"}
					subTitolo={"INGREDIENTI"}
					contenuto={
						<ul>
							<li>1 kg di baccalà già ammollato</li>
							<li>500 ml di passata di pomodoro rustica</li>
							<li>1 cipolla bianca</li>
							<li>1 spicchio di aglio</li>
							<li>olio extravergine d'oliva</li>
							<li>sale</li>
							<li>
								250 g di farina gialla tipo fioretto (per
								polenta)
							</li>
							<li>olio extravergine di oliva</li>
							<li>1 limone</li>
						</ul>
					}
					className={""}
				/>
				<div className="body_cointainer_2">
					<h2>Polenta e baccalà</h2>
					<p>
						Un abbinamento classico della tradizione, qui presentato
						nella versione baccalà in umido con polenta, dove il
						pesce, prima fritto e poi cotto dolcemente in una
						saporita salsa al pomodoro, viene servito con un morbida
						polentina. Una ricetta facile, per tutti gli amanti
						della scarpetta!
					</p>
					<p>
						Un modo semplice e gustoso per cucinare il merluzzo che
						caratterizza trasversalmente la cucina di tutta l'Italia
						e che, a seconda del metodo di conservazione (sotto sale
						o essiccato) prende il nome di baccalà o di stoccafisso,
						come per esempio il baccalà alla napoletana o quello
						alla vicentina.{" "}
					</p>
				</div>
			</div>
			<div className="body__1">
				<CardsPrincipale
					immagine={
						"https://www.cucchiaio.it/content/cucchiaio/it/ricette/2021/11/stoccafisso-patate-pomodorini-olive-taggiasche/_jcr_content/header-par/image-single.img.jpg/1637232872162.jpg"
					}
					titolo={
						"Stoccafisso con patate, pomodorini e olive taggiasche"
					}
					subTitolo={"INGREDIENTI"}
					contenuto={
						<ul>
							<li>300 g di stoccafisso già ammollato</li>
							<li>2-3 patate medie</li>
							<li>5-6 pomodorini Piccadilly</li>
							<li>50 g di olive taggiasche</li>
							<li>prezzemolo</li>
							<li>uno spicchio di aglio</li>
							<li>olio extravergine di oliva</li>
							<li>pepe nero</li>
							<li>sale</li>
						</ul>
					}
					className={"cardcolor"}
				/>
				<div className="body_cointainer_1">
					<h2>
						Stoccafisso con patate, pomodorini e olive taggiasche
					</h2>
					<p>
						Lo stoccafisso con patate pomodorini e olive taggiasche
						è un piatto unico appetitoso, un'insalata nutriente e al
						tempo stesso leggera, da gustare anche come antipasto
						per una cena con ospiti. La ricetta è facile ed è pronta
						in meno di un'ora.
					</p>
					<p>
						Lo stoccafisso con patate, pomodorini e olive taggiasche
						è un'insalata colorata e appetitosa. Una preparazione
						molto semplice che consente di gustare un piatto unico
						completo ma leggero, per un pranzo o una cena diversi
						dal solito.
					</p>
				</div>
			</div>
		</div>
	);
};
