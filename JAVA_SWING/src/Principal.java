import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;
import java.awt.GridLayout;
import javax.swing.JTextField;
import javax.swing.JLabel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class Principal {

    private JFrame frame;
    private JTextField num1;
    private JTextField num2;
    private JLabel resultado;

    /**
     * Launch the application.
     */
    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    Principal window = new Principal();
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
    public Principal() {
        initialize();
    }

    /**
     * Initialize the contents of the frame.
     */
    private void initialize() {
        frame = new JFrame();
        frame.setBounds(100, 100, 461, 323);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        GridBagLayout gridBagLayout = new GridBagLayout();
        gridBagLayout.columnWidths = new int[]{0, 0};
        gridBagLayout.rowHeights = new int[]{0, 0, 0, 0, 0};
        gridBagLayout.columnWeights = new double[]{1.0, Double.MIN_VALUE};
        gridBagLayout.rowWeights = new double[]{0.0, 0.0, 0.0, 0.0, Double.MIN_VALUE};
        frame.getContentPane().setLayout(gridBagLayout);

        num1 = new JTextField();
        GridBagConstraints gbc_num1 = new GridBagConstraints();
        gbc_num1.insets = new Insets(0, 0, 5, 0);
        gbc_num1.fill = GridBagConstraints.HORIZONTAL;
        gbc_num1.gridx = 0;
        gbc_num1.gridy = 0;
        frame.getContentPane().add(num1, gbc_num1);
        num1.setColumns(10);

        num2 = new JTextField();
        GridBagConstraints gbc_num2 = new GridBagConstraints();
        gbc_num2.insets = new Insets(0, 0, 5, 0);
        gbc_num2.fill = GridBagConstraints.HORIZONTAL;
        gbc_num2.gridx = 0;
        gbc_num2.gridy = 1;
        frame.getContentPane().add(num2, gbc_num2);
        num2.setColumns(10);

        JButton boton = new JButton("Sumar");
        boton.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                // Leer la caja de texto 1
                String valorNum1 = num1.getText();
                // Leer la caja de texto 2
                String valorNum2 = num2.getText();
                // Sumar los valores
                float r = Float.parseFloat(valorNum1) +  Float.parseFloat(valorNum2);
                // Guardar en la etiqueta el valor
                resultado.setText(r + "");
            }
        });
        GridBagConstraints gbc_boton = new GridBagConstraints();
        gbc_boton.insets = new Insets(0, 0, 5, 0);
        gbc_boton.gridx = 0;
        gbc_boton.gridy = 2;
        frame.getContentPane().add(boton, gbc_boton);

        resultado = new JLabel("0");
        GridBagConstraints gbc_resultado = new GridBagConstraints();
        gbc_resultado.gridx = 0;
        gbc_resultado.gridy = 3;
        frame.getContentPane().add(resultado, gbc_resultado);
    }
}
