import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import java.awt.event.ActionListener;
import java.util.Iterator;
import java.awt.event.ActionEvent;

public class mierda extends JFrame {

	private JPanel contentPane;
	private JTextField textoElegido;
	private JComboBox opciones;
	private JLabel labelResultado;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					mierda frame = new mierda();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public mierda() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		JLabel lblNewLabel = new JLabel("Texto");
		lblNewLabel.setBounds(10, 47, 46, 14);
		contentPane.add(lblNewLabel);

		textoElegido = new JTextField();
		textoElegido.setBounds(84, 44, 86, 20);
		contentPane.add(textoElegido);
		textoElegido.setColumns(10);
		
		labelResultado = new JLabel("");
		labelResultado.setBounds(84, 120, 86, 14);
		contentPane.add(labelResultado);

		JComboBox opciones = new JComboBox();
		opciones.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

				String texto = textoElegido.getText();

				if (opciones.getSelectedItem().equals("Codificar")) {
					String nuevoCodifi = texto.replace("A", "4").replace("B", "8").replace("O", "0").replace("S", "5")
							.replace("G", "6").replace("L", "1");

					labelResultado.setText(nuevoCodifi);

					// System.out.println(nuevoCodifi);
					
				} else {
					String nuevoDescodifi = texto.replace("4", "A").replace("8", "B").replace("0", "O")
							.replace("5", "S").replace("6", "G").replace("1", "L");

					labelResultado.setText(nuevoDescodifi);
					// System.out.println(nuevoDescodifi);
				}
			}
		});

		opciones.setBounds(241, 43, 133, 22);
		contentPane.add(opciones);
		opciones.addItem("Codificar");
		String opcion = "codificar";
		opciones.addItem("Descodificar");
		String opcion2 = "descodificar";

	}

}
