import java.awt.EventQueue;

import javax.swing.JFrame;
import java.awt.GridBagLayout;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.GridBagConstraints;
import java.awt.Insets;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Mensaje {

	private JFrame frame;
	private JTextField nombre;
	private JTextField apellidos;
	private JTextField edad;
	private JLabel Mensaje;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Mensaje window = new Mensaje();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public Mensaje() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		frame.setBounds(100, 100, 450, 300);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		GridBagLayout gridBagLayout = new GridBagLayout();
		gridBagLayout.columnWidths = new int[] { 0, 0, 0 };
		gridBagLayout.rowHeights = new int[] { 0, 0, 0, 0, 0, 0, 0 };
		gridBagLayout.columnWeights = new double[] { 0.0, 1.0, Double.MIN_VALUE };
		gridBagLayout.rowWeights = new double[] { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, Double.MIN_VALUE };
		frame.getContentPane().setLayout(gridBagLayout);

		JLabel lblNewLabel = new JLabel("Nombre");
		GridBagConstraints gbc_lblNewLabel = new GridBagConstraints();
		gbc_lblNewLabel.anchor = GridBagConstraints.EAST;
		gbc_lblNewLabel.insets = new Insets(0, 0, 5, 5);
		gbc_lblNewLabel.gridx = 0;
		gbc_lblNewLabel.gridy = 0;
		frame.getContentPane().add(lblNewLabel, gbc_lblNewLabel);

		nombre = new JTextField();
		GridBagConstraints gbc_nombre = new GridBagConstraints();
		gbc_nombre.insets = new Insets(0, 0, 5, 0);
		gbc_nombre.fill = GridBagConstraints.HORIZONTAL;
		gbc_nombre.gridx = 1;
		gbc_nombre.gridy = 0;
		frame.getContentPane().add(nombre, gbc_nombre);
		nombre.setColumns(10);

		JLabel lblNewLabel_1 = new JLabel("Apellidos");
		GridBagConstraints gbc_lblNewLabel_1 = new GridBagConstraints();
		gbc_lblNewLabel_1.insets = new Insets(0, 0, 5, 5);
		gbc_lblNewLabel_1.gridx = 0;
		gbc_lblNewLabel_1.gridy = 1;
		frame.getContentPane().add(lblNewLabel_1, gbc_lblNewLabel_1);

		apellidos = new JTextField();
		GridBagConstraints gbc_apellidos = new GridBagConstraints();
		gbc_apellidos.insets = new Insets(0, 0, 5, 0);
		gbc_apellidos.fill = GridBagConstraints.HORIZONTAL;
		gbc_apellidos.gridx = 1;
		gbc_apellidos.gridy = 1;
		frame.getContentPane().add(apellidos, gbc_apellidos);
		apellidos.setColumns(10);

		JLabel lblNewLabel_2 = new JLabel("Edad");
		GridBagConstraints gbc_lblNewLabel_2 = new GridBagConstraints();
		gbc_lblNewLabel_2.anchor = GridBagConstraints.EAST;
		gbc_lblNewLabel_2.insets = new Insets(0, 0, 5, 5);
		gbc_lblNewLabel_2.gridx = 0;
		gbc_lblNewLabel_2.gridy = 2;
		frame.getContentPane().add(lblNewLabel_2, gbc_lblNewLabel_2);

		edad = new JTextField();
		edad.setColumns(10);
		GridBagConstraints gbc_edad = new GridBagConstraints();
		gbc_edad.insets = new Insets(0, 0, 5, 0);
		gbc_edad.fill = GridBagConstraints.HORIZONTAL;
		gbc_edad.gridx = 1;
		gbc_edad.gridy = 2;
		frame.getContentPane().add(edad, gbc_edad);

		JButton entrar = new JButton("Entrar");
		entrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String textoMensaje;
				if (Integer.parseInt(edad.getText()) >= 18) {
					textoMensaje = "Puedes entrar";
				} else {
					textoMensaje = "Lo siento " + nombre.getText() + " " + apellidos.getText()
							+ " no tienes la edad sufuciente";
					JOptionPane.showMessageDialog(frame, textoMensaje, "Info", JOptionPane.OK_OPTION);
				}
				Mensaje.setText(textoMensaje);
			}
		});
		GridBagConstraints gbc_entrar = new GridBagConstraints();
		gbc_entrar.insets = new Insets(0, 0, 5, 0);
		gbc_entrar.gridx = 1;
		gbc_entrar.gridy = 3;
		frame.getContentPane().add(entrar, gbc_entrar);

		Mensaje = new JLabel("");
		GridBagConstraints gbc_Mensaje = new GridBagConstraints();
		gbc_Mensaje.insets = new Insets(0, 0, 5, 0);
		gbc_Mensaje.gridx = 1;
		gbc_Mensaje.gridy = 4;
		frame.getContentPane().add(Mensaje, gbc_Mensaje);
	}

}
