"""empty message

Revision ID: 5990d99ef48f
Revises: 550cf3d2c2a8
Create Date: 2019-10-01 07:37:12.483517

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5990d99ef48f'
down_revision = '550cf3d2c2a8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('admin', sa.Boolean(), nullable=True))
    op.execute('UPDATE users SET admin=False')
    op.alter_column('users', 'admin', nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'admin')
    # ### end Alembic commands ###
