import java.awt.EventQueue;

import javax.swing.JFrame;
import java.awt.GridBagLayout;
import javax.swing.JLabel;
import java.awt.GridBagConstraints;
import javax.swing.JTextField;
import java.awt.Insets;
import java.awt.GridLayout;
import java.awt.BorderLayout;
import javax.swing.JPanel;
import javax.swing.DefaultListModel;
import javax.swing.JButton;
import java.awt.FlowLayout;
import javax.swing.JList;
import javax.swing.JScrollPane;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class lista {

	private JFrame frame;
	private JTextField nombre;
	private JList lista;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					lista window = new lista();
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
	public lista() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		frame.setBounds(100, 100, 450, 300);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().setLayout(new BorderLayout(0, 0));

		JPanel panel = new JPanel();
		frame.getContentPane().add(panel, BorderLayout.NORTH);
		panel.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));

		JLabel lblNewLabel = new JLabel("Nombre");
		panel.add(lblNewLabel);

		nombre = new JTextField();
		panel.add(nombre);
		nombre.setColumns(10);

		JButton add = new JButton("A\u00F1adir nombre");
		add.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String textoNombre = nombre.getText();

				DefaultListModel<String> dlm = (DefaultListModel<String>) lista.getModel();
				dlm.addElement(textoNombre);
				
				nombre.setText("");

			}
		});
		panel.add(add);

		JButton borrar = new JButton("Borrar nombre seleccionado");
		borrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				int indiceSeleccionado = lista.getSelectedIndex();
				DefaultListModel<String> dlm = (DefaultListModel<String>) lista.getModel();
				dlm.remove(indiceSeleccionado);
			}
		});
		frame.getContentPane().add(borrar, BorderLayout.SOUTH);

		JScrollPane scrollPane = new JScrollPane();
		frame.getContentPane().add(scrollPane, BorderLayout.CENTER);

		lista = new JList();
		lista.setModel(new DefaultListModel());
		scrollPane.setViewportView(lista);

		JLabel lblNewLabel_1 = new JLabel("Lista de nombres de personas: ");
		scrollPane.setColumnHeaderView(lblNewLabel_1);
	}
}
